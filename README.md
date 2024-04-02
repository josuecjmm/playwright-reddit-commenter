
# Playwright reddit commenter

  

Automated playwright automation to comment on reddit posts

  


## How to use

1. Install nodejs dependencies with `npm install`
2. Install playwright browsers with `npx playwright install`

2. Copy the .env.example to .env with: `cp .env.example .env`

3. Fill the .env with your email/user, password and reddit post link

```

BASE_URL=https://www.reddit.com

EMAIL=test

PASSWORD=XXXX

POST_URL='/r/subreddit/comments/randomString/post_name/'

```
4. Run the test in **headed** mode with `npm run test` or in **headless** mode with `npm run test:headless`