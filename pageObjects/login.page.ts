import ParentPage from "./parentPage.page";
import { Locator, Page, expect } from "@playwright/test";

class LoginPage extends ParentPage {
    constructor(private page: Page) {
        super()
    }
    
    readonly btnLogin: Locator = this.page.getByRole('link', { name: 'Log In' })

    readonly formLogin = {
        inputUsername: this.page.locator('input[name="username"]'),
        inputPassword: this.page.locator('input[name="password"]'),
        btnLogin: this.page.getByRole('button', { name: 'Log In' })
    }

    public async visit(): Promise<void> {
        await this.page.goto('/')
    }

    public async login(username: string, password: string): Promise<void> {
        await super.click(this.btnLogin)
        await super.fillInput(this.formLogin.inputUsername, username)
        await super.fillInput(this.formLogin.inputPassword, password)
        await super.click(this.formLogin.btnLogin)
        await super.waitForToast(this.page)
    }
}
export default LoginPage;