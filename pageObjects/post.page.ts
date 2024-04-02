import ParentPage from "./parentPage.page";
import { Locator, Page, expect } from "@playwright/test";

class PostPage extends ParentPage {
    constructor(private page: Page) {
        super()
    }

    readonly iconLoading: Locator = this.page.locator('shreddit-loading')

    readonly addComment = {
        btnAdd: this.page.getByRole('button', { name: 'Add a comment' }),
        input: this.page.locator('#main-content').getByRole('textbox'),
        btnComment: this.page.getByRole('button', { name: 'Comment', exact: true })
    }

    readonly comments: Locator = this.page.locator('shreddit-comment p')

    readonly userActions = {
        btnOpen: this.page.locator('faceplate-dropdown-menu')
            .filter({ hasText: 'Edit comment Save Delete' })
            .getByLabel('Open user actions'),
        optDeleteComment: this.page.getByText('Delete comment'),
        btnConfirmDelete: this.page.getByRole('button', { name: 'Delete' })
    }

    private async waitForLoading(): Promise<void> {
        await super.waitForElementToDissapear(this.iconLoading)
    }

    public async loadPost(postLink: string): Promise<void> {
        await this.page.goto(postLink)
        await this.waitForLoading()
    }

    public async commentOnPost(comment: string): Promise<void> {
        await super.click(this.addComment.btnAdd)
        await super.fillInput(this.addComment.input, comment)
        await super.click(this.addComment.btnComment)
        expect(this.comments.first()).toHaveText(comment)
    }

    public async deleteLastAddedComment(): Promise<void> {
        await super.click(this.userActions.btnOpen.first())
        await super.click(this.userActions.optDeleteComment)
        await super.click(this.userActions.btnConfirmDelete)
        await super.waitForToast(this.page)
    }
}
export default PostPage;