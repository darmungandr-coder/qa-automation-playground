import {test, expect} from '@playwright/test';

test.skip('radio button', async ({page})=>
 {
    await page.goto('https://letcode.in/radio');
    const radioDiv = page.locator('.control').nth(1);
    const radioYes = radioDiv.getByRole('radio', {name: 'Yes'});
    const radioNo = radioDiv.getByRole('radio', {name: 'No'});
    await radioYes.check();
    await expect(radioYes).toBeChecked();
    await expect(radioNo).not.toBeChecked();
    await radioNo.check();
    await expect(radioNo).toBeChecked();
    await expect(radioYes).not.toBeChecked();
 })

 test('check attribute', async ({page})=>
 {
    await page.goto('https://letcode.in/radio');
    expect (page.getByText('Confirm last field is disabled', { exact: true })).toHaveAttribute('class', 'label');
 })

  test.only('check attribute', async ({page})=>
 {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const

 })
