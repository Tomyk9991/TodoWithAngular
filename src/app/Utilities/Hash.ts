export default function (str: string): number {
    let hash: number = 0;
    let i: number = 0;
    let char;

    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; // Convert to 32bit integer
    }

    return hash;
}
