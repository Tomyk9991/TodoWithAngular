import IMessageBoxContent, {MessageBoxType} from "./IMessageBoxContent";

export class HeaderMessageContent implements IMessageBoxContent {
    content: string = "";
    flag: MessageBoxType = MessageBoxType.Header;


    constructor(content: string) {
        this.content = content;
    }

}
