import IMessageBoxContent, {MessageBoxType} from "./IMessageBoxContent";

export default class HyperLinkMessageContent implements IMessageBoxContent {
    content: string;
    flag: MessageBoxType = MessageBoxType.Hyperlink;
    link: string;


    constructor(content: string, link: string) {
        this.content = content;
        this.link = link;
    }
}
