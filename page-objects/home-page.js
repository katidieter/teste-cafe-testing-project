import { Selector, t } from 'testcafe';

class HomePage {

    get citySerach() { return Selector("input[name='autocomplete']"); } 
    get getQuote() { return Selector('a').withText('Gerar orçamento') }
    
    async search(city) {
        await t.
        typeText(this.citySerach, city).
        wait(3000).
        pressKey('enter')
    }

    async clickGetQuote() {
        await t.click(this.getQuote)
    }
}

export default new HomePage();