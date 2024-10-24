// Оголошення типу AllType
type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
};

// Використання Generics та Pick для функції compare
function compare<T extends Pick<AllType, 'name' | 'color'>, U extends Pick<AllType, 'position' | 'weight'>>(top: T, bottom: U): AllType {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
