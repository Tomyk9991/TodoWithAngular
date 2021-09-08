export default interface IEditable {
    isEditMode: boolean;

    onFocus(): void;
    onLoseFocus(): void;
    onSubmit(inputElement: HTMLInputElement): Promise<void>;
}
