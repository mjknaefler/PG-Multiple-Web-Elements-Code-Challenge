const { expect } = require("chai");
describe('Test cases for practicing multiple web elements', async () => {
    it('Verify there are more than 40 links on the facebook.com', async() => {
        /**
         * 1. Launch facebook.com 
         * 2. Verify there are more than 40-links
         */

        //1. Launch facebook.com 
        await browser.url('https://facebook.com/');

        //2. Verify there are more than 40-links
        const linkElements = await $$('<a>');

        expect(linkElements,'Amount of link elements is not greater than 40').to.have.lengthOf.above(40);
    })
    it('Verify number of options in Church Chairs is equals to 7', async () => {
        /**
         * 1. Launch https://classroomessentialsonline.com/  
         * 2. Move mouse to Church Chairs
         * 3. Verify there are 7-options in Church Chairs
         */

        //1. Launch https://classroomessentialsonline.com/  
        await browser.url('https://classroomessentialsonline.com/  ');
        await browser.pause(3000);
        //2. Move mouse to Church Chairs
        const churchChairsElement = await $('//a[@href="/church-chairs/"]');
        await churchChairsElement.moveTo();
        await browser.pause(3000);
        //3. Verify there are 7-options in Church Chairs
        const churchChairOptions = await $$('//a[@href="/church-chairs/"]/following-sibling::div[@id="navPages-"]//li');
        expect(churchChairOptions.length,'There are not 7 church chair options').to.equal(7);

    })
})