import { test } from '@playwright/test';
import LoginPage from "../pageObjects/login.page";
import PostPage from '../pageObjects/post.page';

const { EMAIL_USERNAME, PASSWORD, POST_URL } = process.env;

test.describe('Comments', () => {
    let loginPage: LoginPage
    let postPage: PostPage

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        postPage = new PostPage(page)
        await loginPage.visit()
        await loginPage.login(EMAIL_USERNAME!, PASSWORD!)
    });

    test('Verify you can add a comment to a post', async () => {
        await postPage.loadPost(POST_URL!)
        await postPage.commentOnPost('hello world')
    })

    test.afterEach(async() => {
        await postPage.deleteLastAddedComment()
    })
})
