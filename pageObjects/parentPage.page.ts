import {Locator, Page} from "@playwright/test";

class ParentPage {
    async click(element: Locator): Promise<void> {
        await element.waitFor()
        await element.click()
    }

    async fillInput(element: Locator, value: string): Promise<void> {
        await element.waitFor()
        await element.fill(value)
    }

    async waitForElementToDissapear(element: Locator): Promise<void> {
        await element.waitFor({state: 'hidden'})
    }

    async waitForToast(page: Page) {
        const toast = page.locator('faceplate-toast slot').nth(2)
        await toast.waitFor()
    }
}

export default ParentPage;