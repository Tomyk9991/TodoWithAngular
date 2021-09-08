export default function isImageURL(target: string): boolean {
    return target.match(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i) != null;
}
