describe('Trust Wallet App - Create Wallet Flow', () => {
  it('should complete wallet creation steps', async () => {
    // 1. Tap "Create New Wallet"
    const createBtn = await $('//android.widget.TextView[@resource-id="buttonTitle" and @text="Create new wallet"]');
    await createBtn.waitForDisplayed({ timeout: 10000 });
    await createBtn.click();

    // 2. Create passcode
    const passcodeInput = await $('//android.widget.TextView[@text="1"]');
    await passcodeInput.waitForDisplayed({ timeout: 10000 });
    await passcodeInput.click();
    const passcodeInput2 = await $('//android.widget.TextView[@text="1"]');
    await passcodeInput2.click();
    const passcodeInput3 = await $('//android.widget.TextView[@text="1"]');
    await passcodeInput3.click();
    const passcodeInput4 = await $('//android.widget.TextView[@text="1"]');
    await passcodeInput4.click();
    const passcodeInput5 = await $('//android.widget.TextView[@text="1"]');
    await passcodeInput5.click();
    const passcodeInput6 = await $('//android.widget.TextView[@text="1"]');
    await passcodeInput6.click();

    // 3. Confirm passcode
    const passcodeInputConfirm = await $('//android.widget.TextView[@text="1"]');
    await passcodeInputConfirm.waitForDisplayed({ timeout: 10000 });
    await passcodeInputConfirm.click();
    const passcodeInputConfirm2 = await $('//android.widget.TextView[@text="1"]');
    await passcodeInputConfirm2.click();
    const passcodeInputConfirm3 = await $('//android.widget.TextView[@text="1"]');
    await passcodeInputConfirm3.click();
    const passcodeInputConfirm4 = await $('//android.widget.TextView[@text="1"]');
    await passcodeInputConfirm4.click();
    const passcodeInputConfirm5 = await $('//android.widget.TextView[@text="1"]');
    await passcodeInputConfirm5.click();
    const passcodeInputConfirm6 = await $('//android.widget.TextView[@text="1"]');
    await passcodeInputConfirm6.click();

    // 4. Skip notifications
    const skipText = await $('//android.widget.TextView[@resource-id="secondaryAction"]');
    await skipText.click();

    // 5. Assert wallet creation success
    const walletCreatedText = await $('//android.widget.TextView[@text="Brilliant, your wallet is ready!"]');
    await expect(walletCreatedText).toBeDisplayed('Brilliant, your wallet is ready!');
  });
});
