/**
 * Array, that loses the element reference as soon as its popped.
 * Name refers to weak_pointers in c++. Basically they are for lookup. The difference here is, the look up is limited.
 * It's cached for only one use
 */
export interface IWeakArray<K, T> {
    push(index: K, element: T): void;
    remove(index: K): void;
    pop(index: K): T;
    contains(index: K): boolean;
}
