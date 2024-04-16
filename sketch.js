// Get window resolution
const width = window.innerWidth
const heigth = 0.95 * window.innerHeight

let zoomFactor = 170
let mapChanged = true

function setup() {
    createCanvas(width, heigth)
    noiseDetail(9, 0.5);

}

function getX(x) {
    return (x) / zoomFactor
}

function getY(y) {
    return (y) / zoomFactor
}

function draw() {
    if (!mapChanged) {
        return
    }

    const terrains = [
        new Terrain('water'),
        new Terrain('sand'),
        new Terrain('grass'),
        new Terrain('trees')
    ]

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < heigth; y++) {
            const xValue = getX(x)
            const yValue = getY(y)
            const noiseValue = noise(xValue, yValue)

            let terrain = terrains.find(terrain => noiseValue < terrain.maxHeight) || terrains[3]


            set(x, y, terrain.getColorByNoiseValue(noiseValue))
        }
    }
    
    updatePixels()
    mapChanged = false;

}