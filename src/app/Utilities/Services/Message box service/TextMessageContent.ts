import IMessageBoxContent, {MessageBoxType} from "./IMessageBoxContent";

export default class TextMessageContent implements IMessageBoxContent {
    content: string;
    flag: MessageBoxType = MessageBoxType.TextMessage;


    constructor(content: string) {
        this.content = content;
    }

}
