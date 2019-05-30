  import { Selector, t } from 'testcafe';

class ResultPage {
    get seeMoreResultsBtn() { return Selector(".button-carousel"); }

    async clickSeeMoreResults() {
      await t.click(this.seeMoreResultsBtn)
    }
}

export default new ResultPage();