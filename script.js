document.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    let emptyTile = document.querySelector('.empty');

    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            if (isValidMove(tile, emptyTile)) {
                swapTiles(tile, emptyTile);
                emptyTile = tile;
            }
        });
    });

    function isValidMove(tile, emptyTile) {
        const tileIndex = tiles.indexOf(tile);
        const emptyTileIndex = tiles.indexOf(emptyTile);

        const validMoves = [
            emptyTileIndex - 4, // Move from above
            emptyTileIndex + 4, // Move from below
            emptyTileIndex - 1, // Move from left
            emptyTileIndex + 1  // Move from right
        ];

        return validMoves.includes(tileIndex);
    }

    function swapTiles(tile1, tile2) {
        const img1 = tile1.querySelector('img');
        const img2 = tile2.querySelector('img');

        if (img1) {
            tile2.appendChild(img1);
        }

        if (img2) {
            tile1.appendChild(img2);
        }

        tile1.classList.toggle('empty');
        tile2.classList.toggle('empty');
    }
});
