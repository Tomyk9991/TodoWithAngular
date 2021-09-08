import IMessageBoxContent, {MessageBoxType} from "./IMessageBoxContent";

export default class ImageMessageContent implements IMessageBoxContent {
    content: string;
    flag: MessageBoxType = MessageBoxType.Image;

    constructor(imageLink: string) {
        this.content = imageLink;
    }
}
