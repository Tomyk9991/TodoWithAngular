export default interface IMessageBoxContent {
    flag: MessageBoxType;
    content: string;
}

export enum MessageBoxType {
    TextMessage = 0,
    Header = 1,
    Hyperlink = 2,
    Image = 3,
}
