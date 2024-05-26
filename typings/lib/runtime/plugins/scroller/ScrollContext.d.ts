export class ScrollContext {
    /**
     * @param {RenderContext} context
     */
    constructor(context: RenderContext);
    /** @type {HTMLElement} */
    elem: HTMLElement;
    /** @type {RenderContext} */
    ctx: RenderContext;
    /** @type {boolean} */
    isInstant: boolean;
    /** @type {HTMLElement} */
    scrollTarget: HTMLElement;
    init(): Promise<void>;
    shouldScrollToElem: true | HTMLElement;
    boundary: HTMLElement;
    getNearestBoundary(): Promise<HTMLElement>;
    handleScrollInstructions(): Promise<any>;
}
