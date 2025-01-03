type Direction = "north" | "south" | "east" | "west";
const move: Direction = "south";
console.log(move);

enum DirectionEnum {
    NORTH,
    SOUTH,
    EAST,
    WEST
}

const toPositon: DirectionEnum = DirectionEnum.NORTH;
console.log(toPositon);