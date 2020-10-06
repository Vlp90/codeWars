// Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. 
// Doing so will kill you instantly!

// You will be given a 2D array of the maze and an array of directions. 
// Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. 
// If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, 
// you should return Lost.

// 0 = Safe place to walk
// 1 = Wall
// 2 = Start Point
// 3 = Finish Point

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]

// direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"

// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
// 2. The start and finish positions will change for the final tests.
// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
// 4. If you reach the end point before all your moves have gone, you should return Finish.
// 5. If you hit any walls or go outside the maze border, you should return Dead.
// 6. If you find yourself still in the maze after using all the moves, you should return Lost.

// const mazeRunner = (maze, directions) => {


// }

const find = (maze, N, num) => {
    for (let i = 0; i < N; i++) {
        let index = maze[i].indexOf(num)
        if (index > -1) return [i, index]
    }
    return -1
}


const mazeRunner = (maze, direction) => {



    
    if (!maze || !Array.isArray(maze) || maze[0].length !== maze.length) throw new Error("invalid argument")
    const N = maze[0].length
    let start = find(maze, N, 2)
    if (start < 0) throw new Error("start point not found")
    let finish = find(maze, N, 3)
    if (finish < 0) throw new Error("finish point not found")
    for (let i = 0; i < direction.length; i++) {
        switch (direction[i]) {
            case "E":
                start = [start[0], start[1] + 1];
                break;
            case "W":
                start = [start[0], start[1] - 1]
                break;
            case "N":
                start = [start[0] - 1, start[1]]
                break;
            case "S":
                start = [start[0] + 1, start[1]]
                break;
            default:
                throw new Error("unidentified direction")
        }
        if (start[0] < 0 || start[0] >= N || start[1] < 0 || start[1] >= N || maze[start[0]][start[1]] === 1) {
            return "Dead"
        }

    }
    if (start[0] === finish[0] && start[1] === finish[1]) return "Finish"

    return "Safe place to walk"
}

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]

// console.log(reach(maze,["N","N","N","N","N","E","E","E","E","E"]))
console.log(mazeRunner(maze,["N","E","E", 'N', "N", ]))