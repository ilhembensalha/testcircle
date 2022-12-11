describe('SearchEngine', () => {

    it('should pass locale to third party api', () => {

        /* Spying on `thirdPartySearchApi.search` and faking result. */
        spyOn(thirdPartySearchApi, 'search').and.returnValue([
            {
                title: 'Wishtack - Making Your Wishes Come True',
                url: 'https://www.wishtack.com'
            }
        ]);

        /* Trigger search. */
        searchEngine.search({keywords: 'Wishtack'});

        /* Check spy's call count. */
        expect(thirdPartySearchApi.search.callCount).toBe(1);

        /* Check spy's call args. */
        expect(thirdPartySearchApi.search).toHaveBeenCalledWith({
            country: 'US',
            keywords: 'Wishtack',
            language: 'en'
        });

    });

});