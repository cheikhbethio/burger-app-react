function toto(imageWidth, imageHeigth, image, panelWidth, panelHeigth, panel) {

    for (let iyy = 0; iyy < imageHeigth; iyy++) {

        for (let ixx = 0; ixx < imageWidth; ixx++) {
            const store = [];
            for (let l = iyy; l < iyy + panelHeigth; l++) {
                if (iyy + panelHeigth <= image.length) {
                    store.push(image[l].slice(ixx, ixx + panelWidth));
                }
            }

            const flattenPanel = panel.flat();
            const flattenStore = store.flat();
            let allPresence = [];
            for (let index = 0; index < flattenPanel.length; index++) {
                const a = flattenPanel[index];
                const b = flattenStore[index];
                allPresence.push(a == b);
            }
            const isEqual = allPresence.every(el => el == true);
            if (isEqual) {
                return [ixx, iyy]
            }
        }
    }
    return [-1, -1];
}


const image = [
    ['1', '2', '3', 's'],
    ['4', '5', '6', 'h'],
    ['7', '8', '9', 'g']
]

const panel = [
    ['6', 'h'],
    ['9', 'g'],
]

console.log("panel[0].length", panel[0]);
console.log('finale', toto(image[0].length, image.length, image, panel[0].length, panel.length, panel));