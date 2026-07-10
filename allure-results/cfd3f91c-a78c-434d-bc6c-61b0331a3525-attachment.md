# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\specs\myntra.spec.ts >> Myntra Shopping Flow >> should add the last jeans product to the bag and verify it appears in bag @myntra
- Location: tests\web\specs\myntra.spec.ts:4:7

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Jeans', exact: true })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e3]:
    - text: "| | |"
    - generic:
      - link [ref=e5] [cursor=pointer]:
        - /url: /
      - navigation [ref=e6]:
        - generic [ref=e7]:
          - link "Men" [ref=e10] [cursor=pointer]:
            - /url: /shop/men
          - link "Women" [ref=e13] [cursor=pointer]:
            - /url: /shop/women
          - link "Kids" [ref=e16] [cursor=pointer]:
            - /url: /shop/kids
          - link "Home" [ref=e19] [cursor=pointer]:
            - /url: /shop/home-living
          - link "Beauty" [ref=e22] [cursor=pointer]:
            - /url: /personal-care
          - link "Genz" [ref=e25] [cursor=pointer]:
            - /url: /shop/fwd-women
          - generic [ref=e27]:
            - link "Studio" [ref=e28] [cursor=pointer]:
              - /url: /studio/home
            - superscript [ref=e30]: new
      - generic [ref=e31]:
        - generic [ref=e35]: Profile
        - link "Wishlist":
          - /url: /wishlist
          - generic [ref=e37] [cursor=pointer]: Wishlist
        - link "Bag":
          - /url: /checkout/cart
          - generic [ref=e39] [cursor=pointer]: Bag
      - textbox "Search for products, brands and more" [ref=e41]
  - generic [ref=e45]:
    - main [ref=e46]:
      - generic [ref=e47]:
        - generic [ref=e56]:
          - generic:
            - generic:
              - link:
                - /url: https://www.myntra.com/myntra?f=Quick%20Filters:Mega%20Price%20Drop
                - img [ref=e57] [cursor=pointer]
        - generic [ref=e62]:
          - generic [ref=e66]:
            - generic:
              - generic:
                - link:
                  - /url: https://www.myntra.com/shop/men
                  - img [ref=e67] [cursor=pointer]
          - generic [ref=e71]:
            - generic:
              - generic:
                - link:
                  - /url: https://www.myntra.com/shop/women
                  - img [ref=e72] [cursor=pointer]
        - generic [ref=e81]:
          - generic:
            - generic:
              - link:
                - /url: ""
                - img [ref=e82] [cursor=pointer]
        - generic [ref=e91]:
          - generic:
            - generic:
              - link:
                - /url: https://www.myntra.com/myntra?f=Quick%20Filters:Deal%20of%20the%20Day
                - img [ref=e92] [cursor=pointer]
        - generic [ref=e96]:
          - generic [ref=e98]:
            - generic [ref=e103]:
              - generic [ref=e107]:
                - generic:
                  - generic:
                    - link:
                      - /url: https://www.myntra.com/kids-footwear?rf=Price%3A100.0_500.0_100.0%20TO%20500.0
                      - img [ref=e108] [cursor=pointer]
              - generic [ref=e112]:
                - generic:
                  - generic:
                    - link:
                      - /url: https://www.myntra.com/kids-footwear?f=Categories%3ACasual%20Shoes&rf=Price%3A100.0_800.0_100.0%20TO%20800.0
                      - img [ref=e113] [cursor=pointer]
              - generic [ref=e117]:
                - generic:
                  - generic:
                    - link:
                      - /url: https://www.myntra.com/personal-care?f=Categories%3AFace%20Wash%20and%20Cleanser&rf=Price%3A0.0_200.0_0.0%20TO%20200.0
                      - img [ref=e118] [cursor=pointer]
              - generic [ref=e122]:
                - generic:
                  - generic:
                    - link:
                      - /url: https://www.myntra.com/shampoo?rf=Price%3A0.0_349.0_0.0%20TO%20349.0
                      - img [ref=e123] [cursor=pointer]
              - generic [ref=e127]:
                - generic:
                  - generic:
                    - link:
                      - /url: https://www.myntra.com/personal-care?f=Categories%3ABody%20Wash%20and%20Shower%20Gel&rf=Price%3A0.0_400.0_0.0%20TO%20400.0
                      - img [ref=e128] [cursor=pointer]
            - generic [ref=e133]:
              - link [ref=e140] [cursor=pointer]:
                - /url: https://www.myntra.com/msa-all-styles?f=Categories%3ATshirts&rf=Price%3A100.0_500.0_100.0%20TO%20500.0&rawQuery=MSA%20ALL%20STYLES
              - link [ref=e148] [cursor=pointer]:
                - /url: https://www.myntra.com/msa-all-styles?f=Categories%3AShorts&rf=Price%3A200.0_800.0_200.0%20TO%20800.0&rawQuery=MSA%20ALL%20STYLES
              - link [ref=e156] [cursor=pointer]:
                - /url: https://www.myntra.com/msa-all-styles?f=Categories%3AJackets%2CSweatshirts&rf=Price%3A200.0_1000.0_200.0%20TO%201000.0&rawQuery=MSA%20ALL%20STYLES
              - link [ref=e164] [cursor=pointer]:
                - /url: https://www.myntra.com/msa-all-styles?f=Categories%3ATrack%20Pants&rf=Price%3A200.0_900.0_200.0%20TO%20900.0&rawQuery=MSA%20ALL%20STYLES
              - link [ref=e172] [cursor=pointer]:
                - /url: https://www.myntra.com/men-formal-shoes?rf=Price%3A300.0_1500.0_300.0%20TO%201500.0
            - generic [ref=e178]:
              - link [ref=e185] [cursor=pointer]:
                - /url: https://www.myntra.com/women-ethnic-wear?f=Categories%3ALehenga%20Choli&rf=Price%3A500.0_1600.0_500.0%20TO%201600.0
              - link [ref=e193] [cursor=pointer]:
                - /url: https://www.myntra.com/women-ethnic-wear?f=Categories%3ACo-Ords&rf=Price%3A300.0_1000.0_300.0%20TO%201000.0
              - link [ref=e201] [cursor=pointer]:
                - /url: https://www.myntra.com/women-ethnic-wear?f=Categories%3ADress%20Material&rf=Price%3A200.0_1300.0_200.0%20TO%201300.0
              - link [ref=e209] [cursor=pointer]:
                - /url: https://www.myntra.com/women-footwear?f=Categories%3AHeels%3A%3AOccasions%3AEthnic%2CParty&rf=Price%3A200.0_1000.0_200.0%20TO%201000.0
              - link [ref=e217] [cursor=pointer]:
                - /url: https://www.myntra.com/women-footwear?f=Categories%3AFlats%3A%3AOrnamentation%3AEmbroidered%2CEthnic%20-%20Embellished&rf=Price%3A100.0_1000.0_100.0%20TO%201000.0
            - generic [ref=e223]:
              - link [ref=e230] [cursor=pointer]:
                - /url: https://www.myntra.com/footwear?f=Categories%3AFlats%3A%3AGender%3Amen%2Cmen%20women&rf=Price%3A200.0_1000.0_200.0%20TO%201000.0&rawQuery=footwear
              - link [ref=e238] [cursor=pointer]:
                - /url: https://www.myntra.com/curatedtoo?f=Gender%3Amen%2Cmen%20women%2Cwomen&rf=Price%3A100.0_1300.0_100.0%20TO%201300.0
              - link [ref=e246] [cursor=pointer]:
                - /url: https://www.myntra.com/accessories?f=Categories%3AWatch%20Gift%20Set&rf=Price%3A999.0_2300900.0_999.0%20TO%202300900.0&rawQuery=Accessories
              - link [ref=e254] [cursor=pointer]:
                - /url: https://www.myntra.com/accessories?f=Categories%3ATrolley%20Bag&rf=Price%3A1990.0_81100.0_1199.0%20TO%2081100.0
              - link [ref=e262] [cursor=pointer]:
                - /url: https://www.myntra.com/accessories?f=Categories%3ABelts%2CWallets%3A%3AGender%3Amen%2Cmen%20women&rf=Price%3A299.0_25000.0_299.0%20TO%2025000.0
            - generic [ref=e268]:
              - link [ref=e275] [cursor=pointer]:
                - /url: https://www.myntra.com/hair-straightener?rf=Price%3A300.0_999.0_300.0%20TO%20999.0
              - link [ref=e283] [cursor=pointer]:
                - /url: https://www.myntra.com/beauty-page-appliances?f=Categories%3ADryers%2CStraighteners&rf=Price%3A300.0_1000.0_300.0%20TO%201000.0
              - link [ref=e291] [cursor=pointer]:
                - /url: https://www.myntra.com/women-ethnic-wear?f=Categories%3AKurtas%2CKurtis&rf=Price%3A100.0_200.0_100.0%20TO%20200.0
              - link [ref=e299] [cursor=pointer]:
                - /url: https://www.myntra.com/women-ethnic-wear?f=Categories%3ASarees&rf=Price%3A200.0_400.0_200.0%20TO%20400.0
              - link [ref=e307] [cursor=pointer]:
                - /url: https://www.myntra.com/personal-care?f=Categories%3AConditioner&rf=Price%3A98.0_24400.0_98.0%20TO%2024400.0
            - generic [ref=e313]:
              - link [ref=e320] [cursor=pointer]:
                - /url: https://www.myntra.com/accessories?f=Categories%3AHeadphones&rf=Price%3A500.0_10100.0_500.0%20TO%2010100.0
              - link [ref=e328] [cursor=pointer]:
                - /url: https://www.myntra.com/shirts-for-men?rf=Price%3A100.0_700.0_100.0%20TO%20700.0&rawQuery=Shirts%20For%20Men
              - link [ref=e336] [cursor=pointer]:
                - /url: https://www.myntra.com/tshirts-for-men?f=Categories%3ATshirts&rf=Price%3A100.0_500.0_100.0%20TO%20500.0&rawQuery=Tshirts%20For%20Men
              - link [ref=e344] [cursor=pointer]:
                - /url: https://www.myntra.com/men-jeans?rf=Price%3A200.0_1000.0_200.0%20TO%201000.0
              - link [ref=e352] [cursor=pointer]:
                - /url: https://www.myntra.com/men-bottomwear?f=Categories%3ATrousers&rf=Price%3A200.0_900.0_200.0%20TO%20900.0
            - generic [ref=e358]:
              - link [ref=e365] [cursor=pointer]:
                - /url: https://www.myntra.com/wsa-all-styles?f=Categories%3ABra&rf=Price%3A200.0_1000.0_200.0%20TO%201000.0&rawQuery=wsa%20all%20styles
              - link [ref=e373] [cursor=pointer]:
                - /url: https://www.myntra.com/wsa-all-styles?f=Categories%3ATops&rf=Price%3A200.0_900.0_200.0%20TO%20900.0&rawQuery=wsa%20all%20styles
              - link [ref=e381] [cursor=pointer]:
                - /url: https://www.myntra.com/accessories?f=Categories%3AHandbags%3A%3AGender%3Amen%20women%2Cwomen%3A%3AType%3ATote%20Bag&rf=Price%3A699.0_783500.0_699.0%20TO%20783500.0
              - link [ref=e389] [cursor=pointer]:
                - /url: https://www.myntra.com/accessories?f=Categories%3AClutches%3A%3AGender%3Amen%20women%2Cwomen&rf=Price%3A599.0_62500.0_599.0%20TO%2062500.0
              - link [ref=e397] [cursor=pointer]:
                - /url: https://www.myntra.com/accessories?f=Categories%3AFrames%2CSunglasses&rf=Price%3A100.0_1300.0_100.0%20TO%201300.0
            - generic [ref=e403]:
              - link [ref=e410] [cursor=pointer]:
                - /url: https://www.myntra.com/men-ethnic-wear?f=Categories%3AKurta%20Sets&rf=Price%3A300.0_1000.0_300.0%20TO%201000.0
              - link [ref=e418] [cursor=pointer]:
                - /url: https://www.myntra.com/blazers?rf=Price%3A2499.0_814000.0_2499.0%20TO%20814000.0&rawQuery=blazers
              - link [ref=e426] [cursor=pointer]:
                - /url: https://www.myntra.com/men-bottomwear?f=Categories%3AShorts&rf=Price%3A100.0_500.0_100.0%20TO%20500.0
              - link [ref=e434] [cursor=pointer]:
                - /url: https://www.myntra.com/men-briefs-and-trunks?rf=Price%3A100.0_400.0_100.0%20TO%20400.0
              - link [ref=e442] [cursor=pointer]:
                - /url: https://www.myntra.com/men-topwear?f=Categories%3AJackets&rf=Price%3A300.0_1000.0_300.0%20TO%201000.0
            - generic [ref=e448]:
              - link [ref=e455] [cursor=pointer]:
                - /url: https://www.myntra.com/kids-footwear?rf=Price%3A100.0_500.0_100.0%20TO%20500.0
              - link [ref=e463] [cursor=pointer]:
                - /url: https://www.myntra.com/kids-footwear?f=Categories%3ACasual%20Shoes&rf=Price%3A100.0_800.0_100.0%20TO%20800.0
              - link [ref=e471] [cursor=pointer]:
                - /url: https://www.myntra.com/personal-care?f=Categories%3AFace%20Wash%20and%20Cleanser&rf=Price%3A0.0_200.0_0.0%20TO%20200.0
              - link [ref=e479] [cursor=pointer]:
                - /url: https://www.myntra.com/shampoo?rf=Price%3A0.0_349.0_0.0%20TO%20349.0
              - link [ref=e487] [cursor=pointer]:
                - /url: https://www.myntra.com/personal-care?f=Categories%3ABody%20Wash%20and%20Shower%20Gel&rf=Price%3A0.0_400.0_0.0%20TO%20400.0
            - generic [ref=e493]:
              - link [ref=e500] [cursor=pointer]:
                - /url: https://www.myntra.com/msa-all-styles?f=Categories%3ATshirts&rf=Price%3A100.0_500.0_100.0%20TO%20500.0&rawQuery=MSA%20ALL%20STYLES
              - link [ref=e508] [cursor=pointer]:
                - /url: https://www.myntra.com/msa-all-styles?f=Categories%3AShorts&rf=Price%3A200.0_800.0_200.0%20TO%20800.0&rawQuery=MSA%20ALL%20STYLES
              - link [ref=e516] [cursor=pointer]:
                - /url: https://www.myntra.com/msa-all-styles?f=Categories%3AJackets%2CSweatshirts&rf=Price%3A200.0_1000.0_200.0%20TO%201000.0&rawQuery=MSA%20ALL%20STYLES
              - link [ref=e524] [cursor=pointer]:
                - /url: https://www.myntra.com/msa-all-styles?f=Categories%3ATrack%20Pants&rf=Price%3A200.0_900.0_200.0%20TO%20900.0&rawQuery=MSA%20ALL%20STYLES
              - link [ref=e532] [cursor=pointer]:
                - /url: https://www.myntra.com/men-formal-shoes?rf=Price%3A300.0_1500.0_300.0%20TO%201500.0
          - list [ref=e534]:
            - listitem [ref=e535] [cursor=pointer]:
              - button "• 1" [ref=e536]
            - listitem [ref=e537] [cursor=pointer]:
              - button "• 2" [ref=e538]
            - listitem [ref=e539] [cursor=pointer]:
              - button "• 3" [ref=e540]
            - listitem [ref=e541] [cursor=pointer]:
              - button "• 4" [ref=e542]
            - listitem [ref=e543] [cursor=pointer]:
              - button "• 5" [ref=e544]
            - listitem [ref=e545] [cursor=pointer]:
              - button "• 6" [ref=e546]
            - listitem [ref=e547] [cursor=pointer]:
              - button "• 7" [ref=e548]
            - listitem [ref=e549] [cursor=pointer]:
              - button "• 8" [ref=e550]
        - link [ref=e562] [cursor=pointer]:
          - /url: https://www.myntra.com/myntra?f=Quick%20Filters:Deal%20of%20the%20Day
        - generic [ref=e567]:
          - generic [ref=e569]:
            - generic [ref=e574]:
              - link [ref=e581] [cursor=pointer]:
                - /url: https://www.myntra.com/peesafe-and-furr?sort=new&f=Brand%3AFURR%2CPEESAFE&rawQuery=Peesafe%20and%20FURR&bannerDept=merch
              - link [ref=e589] [cursor=pointer]:
                - /url: https://www.myntra.com/kids?sort=new&f=Brand%3AAllen%20Solly%20Junior%2CGini%20and%20Jony%2CMarks%20%26%20Spencer%2CPepe%20Jeans%2CTommy%20Hilfiger%2CU.S.%20Polo%20Assn.%20Kids%2CUnited%20Colors%20of%20Benetton%3A%3ACategories%3ACapris%2CClothing%20Set%2CCo-Ords%2CDresses%2CJeans%2CJumpsuit%2CShirts%2CShorts%2CSkirts%2CTops%2CTshirts&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0&rawQuery=Kids&bannerDept=merch
              - link [ref=e597] [cursor=pointer]:
                - /url: https://www.myntra.com/accessories?f=Brand%3ABaggit%2CCORSICA%2CCaprese%2CLavie%3A%3ACategories%3AClutches%2CHandbags%2CLaptop%20Bag%2CWallets%3A%3AGender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A70.0_100.0_70.0%20TO%20100.0&bannerDept=merch
              - link [ref=e605] [cursor=pointer]:
                - /url: https://www.myntra.com/accessories?f=Brand%3AAkiki%20London%2CCHARLES%20%26%20KEITH%2CCoach%2CKate%20Spade%2CLongchamp%2CMARC%20JACOBS%2CMario%20Valentino%2CMichael%20Kors%3A%3ACategories%3ABackpacks%2CClutches%2CHandbags%2CWallets%3A%3AGender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0&rawQuery=accessories&bannerDept=merch
              - link [ref=e613] [cursor=pointer]:
                - /url: https://www.myntra.com/women-footwear?f=Brand%3AInc%205%2CMetro%2CMochi&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&bannerDept=merch
            - generic [ref=e619]:
              - link [ref=e626] [cursor=pointer]:
                - /url: https://www.myntra.com/mens-apparel?f=Brand%3ACalvin%20Klein%2CCalvin%20Klein%20Jeans%2CRARE%20RABBIT%2CSELECTED%2CTommy%20Hilfiger%2CU.S.%20Polo%20Assn.%2CU.S.%20Polo%20Assn.%20Denim%20Co.%3A%3ACategories%3AJeans%2CShackets%2CShirts%2CShorts%2CTrousers%2CTshirts&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&rawQuery=mens%20apparel&bannerDept=merch
              - link [ref=e634] [cursor=pointer]:
                - /url: https://www.myntra.com/apparel?f=Brand%3AAeropostale%2CFCUK%2CFrench%20Connection%2CNautica%2CWROGN%20ACTIVE%3A%3ACategories%3ABlazers%2CJeans%2CShirts%2CShorts%2CTrack%20Pants%2CTrousers%2CTshirts%3A%3AGender%3Amen%2Cmen%20women&rf=Discount%20Range%3A55.0_100.0_55.0%20TO%20100.0&rawQuery=apparel&bannerDept=merch
              - link [ref=e642] [cursor=pointer]:
                - /url: https://www.myntra.com/men-footwear?f=Brand%3ANEEMANS%2CRARE%20RABBIT%2CU.S.%20Polo%20Assn.%2CUnited%20Colors%20of%20Benetton&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&bannerDept=merch
              - link [ref=e650] [cursor=pointer]:
                - /url: https://www.myntra.com/men-footwear?f=Brand%3ABirkenstock%2CLacoste&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0&bannerDept=merch
              - link [ref=e658] [cursor=pointer]:
                - /url: https://www.myntra.com/mens-apparel?f=Brand%3A4%20TRIPLE%20O%20FIVE%20O%20BY%20MUFTI%2CFlying%20Machine%2CMufti%2CRARE%20RABBIT%2CU.S.%20Polo%20Assn.%2CU.S.%20Polo%20Assn.%20Denim%20Co.%2CUnited%20Colors%20of%20Benetton%3A%3ACategories%3AJeans%2CShackets%2CShirts%2CShorts%2CTrousers%2CTshirts&rf=Discount%20Range%3A55.0_100.0_55.0%20TO%20100.0&rawQuery=mens%20apparel&bannerDept=merch
            - generic [ref=e664]:
              - link [ref=e671] [cursor=pointer]:
                - /url: https://www.myntra.com/risingstarfashion?f=Brand%3AHOUSE%20OF%20KARI%2CPink%20Fort&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0&rawQuery=RISINGSTARFASHION&bannerDept=merch
              - link [ref=e679] [cursor=pointer]:
                - /url: https://www.myntra.com/womens-western-wear?f=Brand%3ABershka%2CForever%20New%2CGAP%2CGUESS%2CH%26M%2CJC%20Collection%2CJC%20Mode%2CMANGO%2CMANGO%20MNG%2CNEXT%2CTrendyol&bannerDept=merch
              - link [ref=e687] [cursor=pointer]:
                - /url: https://www.myntra.com/women-ethnic-wear?f=Brand%3AIshin%2CVaranga&rf=Discount%20Range%3A75.0_100.0_75.0%20TO%20100.0&bannerDept=merch
              - link [ref=e695] [cursor=pointer]:
                - /url: https://www.myntra.com/ethnic?f=Brand%3AAnouk%2CDIVASTRI%2CDhaaga%20Ghar%2CHere%26Now%20X%20Sanwara%2CHouse%20of%20Pataudi%2CModa%20Rapido%2CSangria%2CTaavi%3A%3ACategories%3ADupatta%2CEthnic%20Dresses%2CKurta%20Sets%2CKurtas%2CKurtis%2CLehenga%20Choli%2CSarees%2CTunics%3A%3AGender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A75.0_100.0_75.0%20TO%20100.0&rawQuery=ethnic&bannerDept=merch
              - link [ref=e703] [cursor=pointer]:
                - /url: https://www.myntra.com/home-furnishing?f=Brand%3ABIANCA%2CBLANC9%2CBLOCKS%20OF%20INDIA%2CBOMBAY%20BEDDING%20COMPANY%2CBOMBAY%20DYEING%2CBichauna%2CCG%20HOMES%2CCLOTHOLOGY%2CCortina%2CDDecor%2CDREAM%20WEAVERZ%2CDreamscape%2CFABINALIV%2CFabindia%2CFabriCare%20BY%20D%27DECOR%2CFamyo%2CFlorida%2CH%26M%2CHOMEMONDE%2CHOMESTIC%2CHome%20Ecstasy%2CHome%20Sizzler%2CHuesland%2CJAIPUR%20FABRIC%2CJC%20HOME%2CKLOTTHE%2CLA%20VERNE%2CLIVSPACE%2CLayers%2CMYTRIDENT%2CMonte%20Carlo%2CNautica%2CPortico%2CPortico%20New%20York%20Signature%2CPure%20Decor%2CQuirky%20Home%2CRaymond%20Home%2CSPACES%2CSTELLAR%20HOME%2CSTELLAR%20HOME%20BY%20PORTICO%2CSWAYAM%2CStatus%2CSteve%20%26%20Anderson%2CStory%40home%2CURBAN%20SPACE%2CUnited%20Colors%20of%20Benetton%2CWelspun%2Chaus%20%26%20kinder%2Chome%20expressions%3A%3ACategories%3ABedsheets%2CCurtains%20and%20Sheers&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0&bannerDept=merch
            - generic [ref=e709]:
              - link [ref=e716] [cursor=pointer]:
                - /url: https://www.myntra.com/men-ethnic-wear?f=Brand%3AAmodh%20by%20Kisah%2CAnug%20by%20SOJANYA%2CFabindia%2CHouse%20of%20Pataudi%2CJompers%2CKISAH%2CKISAH%20PLUS%2COde%20by%20House%20of%20Pataudi%2CSOJANYA%2CSOJANYA%20LUXE%2CSOJANYA%20PLUS%2CSee%20Designs%2CVASTRAMAY&rf=Price%3A200.0_900.0_200.0%20TO%20900.0&bannerDept=merch
              - link [ref=e724] [cursor=pointer]:
                - /url: https://www.myntra.com/mfb-brands?f=Brand%3AFrench%20Connection%2CKenneth%20Cole%2CKiller%2CMetronaut%2CRoadster%2CWROGN%3A%3ACategories%3ATrolley%20Bag&rf=Price%3A1390.0_28000.0_1390.0%20TO%2028000.0&rawQuery=mfb%20brands&bannerDept=merch
              - link [ref=e732] [cursor=pointer]:
                - /url: https://www.myntra.com/risingstarfashion?f=Brand%3AFUR%20JADEN%2CNasher%20Miles&rf=Discount%20Range%3A70.0_100.0_70.0%20TO%20100.0&rawQuery=risingstarfashion&bannerDept=merch
              - link [ref=e740] [cursor=pointer]:
                - /url: https://www.myntra.com/accessories?f=Brand%3AArmani%20Exchange%2CDIESEL%2CEmporio%20Armani%2CFossil%2CMichael%20Kors%3A%3ACategories%3AWatch%20Gift%20Set%2CWatches&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0&bannerDept=merch
              - link [ref=e748] [cursor=pointer]:
                - /url: https://www.myntra.com/accessories?f=Brand%3AGOBOULT%2CRealme%3A%3ACategories%3AHeadphones&bannerDept=merch
            - generic [ref=e754]:
              - link [ref=e761] [cursor=pointer]:
                - /url: https://www.myntra.com/peesafe-and-furr?sort=new&f=Brand%3AFURR%2CPEESAFE&rawQuery=Peesafe%20and%20FURR&bannerDept=merch
              - link [ref=e769] [cursor=pointer]:
                - /url: https://www.myntra.com/kids?sort=new&f=Brand%3AAllen%20Solly%20Junior%2CGini%20and%20Jony%2CMarks%20%26%20Spencer%2CPepe%20Jeans%2CTommy%20Hilfiger%2CU.S.%20Polo%20Assn.%20Kids%2CUnited%20Colors%20of%20Benetton%3A%3ACategories%3ACapris%2CClothing%20Set%2CCo-Ords%2CDresses%2CJeans%2CJumpsuit%2CShirts%2CShorts%2CSkirts%2CTops%2CTshirts&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0&rawQuery=Kids&bannerDept=merch
              - link [ref=e777] [cursor=pointer]:
                - /url: https://www.myntra.com/accessories?f=Brand%3ABaggit%2CCORSICA%2CCaprese%2CLavie%3A%3ACategories%3AClutches%2CHandbags%2CLaptop%20Bag%2CWallets%3A%3AGender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A70.0_100.0_70.0%20TO%20100.0&bannerDept=merch
              - link [ref=e785] [cursor=pointer]:
                - /url: https://www.myntra.com/accessories?f=Brand%3AAkiki%20London%2CCHARLES%20%26%20KEITH%2CCoach%2CKate%20Spade%2CLongchamp%2CMARC%20JACOBS%2CMario%20Valentino%2CMichael%20Kors%3A%3ACategories%3ABackpacks%2CClutches%2CHandbags%2CWallets%3A%3AGender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0&rawQuery=accessories&bannerDept=merch
              - link [ref=e793] [cursor=pointer]:
                - /url: https://www.myntra.com/women-footwear?f=Brand%3AInc%205%2CMetro%2CMochi&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&bannerDept=merch
            - generic [ref=e799]:
              - link [ref=e806] [cursor=pointer]:
                - /url: https://www.myntra.com/mens-apparel?f=Brand%3ACalvin%20Klein%2CCalvin%20Klein%20Jeans%2CRARE%20RABBIT%2CSELECTED%2CTommy%20Hilfiger%2CU.S.%20Polo%20Assn.%2CU.S.%20Polo%20Assn.%20Denim%20Co.%3A%3ACategories%3AJeans%2CShackets%2CShirts%2CShorts%2CTrousers%2CTshirts&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&rawQuery=mens%20apparel&bannerDept=merch
              - link [ref=e814] [cursor=pointer]:
                - /url: https://www.myntra.com/apparel?f=Brand%3AAeropostale%2CFCUK%2CFrench%20Connection%2CNautica%2CWROGN%20ACTIVE%3A%3ACategories%3ABlazers%2CJeans%2CShirts%2CShorts%2CTrack%20Pants%2CTrousers%2CTshirts%3A%3AGender%3Amen%2Cmen%20women&rf=Discount%20Range%3A55.0_100.0_55.0%20TO%20100.0&rawQuery=apparel&bannerDept=merch
              - link [ref=e822] [cursor=pointer]:
                - /url: https://www.myntra.com/men-footwear?f=Brand%3ANEEMANS%2CRARE%20RABBIT%2CU.S.%20Polo%20Assn.%2CUnited%20Colors%20of%20Benetton&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&bannerDept=merch
              - link [ref=e830] [cursor=pointer]:
                - /url: https://www.myntra.com/men-footwear?f=Brand%3ABirkenstock%2CLacoste&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0&bannerDept=merch
              - link [ref=e838] [cursor=pointer]:
                - /url: https://www.myntra.com/mens-apparel?f=Brand%3A4%20TRIPLE%20O%20FIVE%20O%20BY%20MUFTI%2CFlying%20Machine%2CMufti%2CRARE%20RABBIT%2CU.S.%20Polo%20Assn.%2CU.S.%20Polo%20Assn.%20Denim%20Co.%2CUnited%20Colors%20of%20Benetton%3A%3ACategories%3AJeans%2CShackets%2CShirts%2CShorts%2CTrousers%2CTshirts&rf=Discount%20Range%3A55.0_100.0_55.0%20TO%20100.0&rawQuery=mens%20apparel&bannerDept=merch
          - list [ref=e840]:
            - listitem [ref=e841] [cursor=pointer]:
              - button "• 1" [ref=e842]
            - listitem [ref=e843] [cursor=pointer]:
              - button "• 2" [ref=e844]
            - listitem [ref=e845] [cursor=pointer]:
              - button "• 3" [ref=e846]
            - listitem [ref=e847] [cursor=pointer]:
              - button "• 4" [ref=e848]
        - link [ref=e860] [cursor=pointer]:
          - /url: https://www.myntra.com/myntra?f=Quick%20Filters:Deal%20of%20the%20Day
        - generic [ref=e866]:
          - link [ref=e873] [cursor=pointer]:
            - /url: https://www.myntra.com/fusion-wear?rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0
          - link [ref=e881] [cursor=pointer]:
            - /url: https://www.myntra.com/men-casual-wear?plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0
          - link [ref=e889] [cursor=pointer]:
            - /url: https://www.myntra.com/sports-wear?f=Gender%3Amen%2Cmen%20women&rawQuery=sports%20wear&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
          - link [ref=e897] [cursor=pointer]:
            - /url: https://www.myntra.com/wsa-all-new?rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
          - link [ref=e905] [cursor=pointer]:
            - /url: https://www.myntra.com/womens-western-wear?rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0
          - link [ref=e913] [cursor=pointer]:
            - /url: https://www.myntra.com/sport-apparel-?rawQuery=sport%20apparel%20
        - generic [ref=e919]:
          - link [ref=e926] [cursor=pointer]:
            - /url: https://www.myntra.com/loungewear?plaEnabled=false&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
          - link [ref=e934] [cursor=pointer]:
            - /url: https://www.myntra.com/men-innerwear?rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0
          - link [ref=e942] [cursor=pointer]:
            - /url: https://www.myntra.com/lingerie?rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0
          - link [ref=e950] [cursor=pointer]:
            - /url: https://www.myntra.com/watches?rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0
          - link [ref=e958] [cursor=pointer]:
            - /url: https://www.myntra.com/beauty-page-appliances?rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0
          - link [ref=e966] [cursor=pointer]:
            - /url: https://www.myntra.com/grooming?f=Brand%3ABeardhood%2CBombay%20Shaving%20Company%2CFoolzy%2CTHE%20MAN%20COMPANY%2CUstraa&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0
        - generic [ref=e972]:
          - link [ref=e979] [cursor=pointer]:
            - /url: https://www.myntra.com/kids?plaEnabled=false&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0
          - link [ref=e987] [cursor=pointer]:
            - /url: https://www.myntra.com/footwear?f=Gender%3Amen%2Cmen%20women&plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0
          - link [ref=e995] [cursor=pointer]:
            - /url: https://www.myntra.com/footwear-new?f=Gender%3Amen%20women%2Cwomen&plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0
          - link [ref=e1003] [cursor=pointer]:
            - /url: https://www.myntra.com/men-accessories?f=Categories%3ABelts%2CWallets&plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0
          - link [ref=e1011] [cursor=pointer]:
            - /url: https://www.myntra.com/office-wear-men-and-women?rawQuery=office%20wear%20men%20and%20women
          - link [ref=e1019] [cursor=pointer]:
            - /url: https://www.myntra.com/men-ethnic-wear?plaEnabled=false&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0
        - generic [ref=e1025]:
          - link [ref=e1032] [cursor=pointer]:
            - /url: https://www.myntra.com/home-furnishing-menu?plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0
          - link [ref=e1040] [cursor=pointer]:
            - /url: https://www.myntra.com/handbags-and-bags?f=Categories%3AClutches%2CHandbags%2CWallets%3A%3AGender%3Amen%20women%2Cwomen&plaEnabled=false&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0
          - link [ref=e1048] [cursor=pointer]:
            - /url: https://www.myntra.com/gadgets?f=Categories%3AHeadphones%2CSpeakers&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0
          - link [ref=e1056] [cursor=pointer]:
            - /url: https://www.myntra.com/women-jewellery?rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0
          - link [ref=e1064] [cursor=pointer]:
            - /url: https://www.myntra.com/plus-size-all?f=Gender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&sort=new
          - link [ref=e1072] [cursor=pointer]:
            - /url: https://www.myntra.com/plus-size-all?f=Gender%3Amen%2Cmen%20women&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0&sort=new
        - generic [ref=e1078]:
          - link [ref=e1085] [cursor=pointer]:
            - /url: https://www.myntra.com/watches?rawQuery=Watches&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
          - link [ref=e1093] [cursor=pointer]:
            - /url: https://www.myntra.com/loungewear?f=Gender%3Amen%20women%2Cwomen&plaEnabled=false&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
          - link [ref=e1101] [cursor=pointer]:
            - /url: https://www.myntra.com/work-wear-men?extra_search_param=isautosuggestentry%3atrue%3a%3aid%3a2297-work-wear-men&rawQuery=Work%20Wear%20Men
          - link [ref=e1109] [cursor=pointer]:
            - /url: https://www.myntra.com/eyewear?rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
          - link [ref=e1117] [cursor=pointer]:
            - /url: https://www.myntra.com/work-wear-women?extra_search_param=isautosuggestentry%3atrue%3a%3aid%3a2297-work-wear-women&rawQuery=Work%20Wear%20Women
          - link [ref=e1125] [cursor=pointer]:
            - /url: https://www.myntra.com/casual-wear-women-dress?extra_search_param=isautosuggestentry%3atrue%3a%3aid%3a2297-casual-wear-women-dress&rawQuery=Casual%20Wear%20Women%20Dress
        - generic [ref=e1131]:
          - link [ref=e1138] [cursor=pointer]:
            - /url: https://www.myntra.com/trolley-bags?plaEnabled=false&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
          - link [ref=e1146] [cursor=pointer]:
            - /url: https://www.myntra.com/trolley-bags?plaEnabled=false&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
          - link [ref=e1154] [cursor=pointer]:
            - /url: https://www.myntra.com/trolley-bags?plaEnabled=false&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
          - link [ref=e1162] [cursor=pointer]:
            - /url: https://www.myntra.com/flipflop?f=Gender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
          - link [ref=e1170] [cursor=pointer]:
            - /url: https://www.myntra.com/flipflop?f=Gender%3Amen%20women%2Cwomen&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0
        - link [ref=e1183] [cursor=pointer]:
          - /url: https://myntra.onelink.me/eWcy/n1lou79q
    - paragraph [ref=e1187] [cursor=pointer]: UPTO ₹300 OFF
  - contentinfo [ref=e1191]:
    - generic [ref=e1192]:
      - generic [ref=e1193]:
        - generic [ref=e1194]:
          - paragraph [ref=e1195]:
            - link "ONLINE SHOPPING" [ref=e1196] [cursor=pointer]:
              - /url: /?src=onlineShopping
          - link "Men" [ref=e1197] [cursor=pointer]:
            - /url: /shop/men
          - link "Women" [ref=e1198] [cursor=pointer]:
            - /url: /shop/women
          - link "Kids" [ref=e1199] [cursor=pointer]:
            - /url: /shop/kids
          - link "Home" [ref=e1200] [cursor=pointer]:
            - /url: /shop/home-living
          - link "Beauty" [ref=e1201] [cursor=pointer]:
            - /url: /personal-care
          - link "Genz" [ref=e1202] [cursor=pointer]:
            - /url: /shop/fwd-women
          - link "Gift Cards" [ref=e1203] [cursor=pointer]:
            - /url: /giftcard
          - link "Myntra Insider" [ref=e1204] [cursor=pointer]:
            - /url: /myntrainsider?cache=false
          - paragraph [ref=e1205]: USEFUL LINKS
          - link "Blog" [ref=e1206] [cursor=pointer]:
            - /url: http://blog.myntra.com/
          - link "Careers" [ref=e1207] [cursor=pointer]:
            - /url: https://careers.myntra.com
          - link "Site Map" [ref=e1208] [cursor=pointer]:
            - /url: /sitemap
          - link "Corporate Information" [ref=e1209] [cursor=pointer]:
            - /url: /corp-info
          - link "Whitehat" [ref=e1210] [cursor=pointer]:
            - /url: /security/whitehat
          - link "Cleartrip" [ref=e1211] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Myntra Global" [ref=e1212] [cursor=pointer]:
            - /url: https://www.myntraglobal.com/
        - generic [ref=e1213]:
          - paragraph [ref=e1214]: CUSTOMER POLICIES
          - link "Contact Us" [ref=e1215] [cursor=pointer]:
            - /url: /contactus
          - link "FAQ" [ref=e1216] [cursor=pointer]:
            - /url: /faqs
          - link "T&C" [ref=e1217] [cursor=pointer]:
            - /url: /tac
          - link "Terms Of Use" [ref=e1218] [cursor=pointer]:
            - /url: /termsofuse
          - link "Track Orders" [ref=e1219] [cursor=pointer]:
            - /url: /my/orders
          - link "Shipping" [ref=e1220] [cursor=pointer]:
            - /url: /faqs#shipping
          - link "Cancellation" [ref=e1221] [cursor=pointer]:
            - /url: /faqs#cancel
          - link "Privacy policy" [ref=e1222] [cursor=pointer]:
            - /url: /privacypolicy
          - link "Grievance Redressal" [ref=e1223] [cursor=pointer]:
            - /url: /grievanceredressal
          - link "FSSAI Food Safety Connect app" [ref=e1224] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=e1225]:
          - paragraph [ref=e1226]: EXPERIENCE MYNTRA APP ON MOBILE
          - generic:
            - link:
              - /url: https://play.google.com/store/apps/details?id=com.myntra.android
            - link:
              - /url: https://itunes.apple.com/in/app/myntra-indias-fashion-store/id907394059
          - generic [ref=e1227]: KEEP IN TOUCH
          - link [ref=e1228] [cursor=pointer]:
            - /url: https://www.facebook.com/myntra
          - link:
            - /url: https://twitter.com/myntra
          - link:
            - /url: https://www.youtube.com/user/myntradotcom
          - link:
            - /url: https://www.instagram.com/myntra
        - generic [ref=e1230]:
          - generic [ref=e1234]:
            - strong [ref=e1235]: 100% ORIGINAL
            - text: guarantee for all products at myntra.com
          - generic [ref=e1239]:
            - strong [ref=e1240]: Return within 14days
            - text: of receiving your order
      - generic [ref=e1242]:
        - separator [ref=e1243]
        - generic [ref=e1244]: POPULAR SEARCHES
        - generic [ref=e1245]:
          - link "Makeup |" [ref=e1246] [cursor=pointer]:
            - /url: /makeup
          - link "Dresses For Girls |" [ref=e1247] [cursor=pointer]:
            - /url: /girls-dresses
          - link "T-Shirts |" [ref=e1248] [cursor=pointer]:
            - /url: /tshirts
          - link "Sandals |" [ref=e1249] [cursor=pointer]:
            - /url: /sandals
          - link "Headphones |" [ref=e1250] [cursor=pointer]:
            - /url: /headphones
          - link "Babydolls |" [ref=e1251] [cursor=pointer]:
            - /url: /babydolls
          - link "Blazers For Men |" [ref=e1252] [cursor=pointer]:
            - /url: /men-blazers
          - link "Handbags |" [ref=e1253] [cursor=pointer]:
            - /url: /handbags
          - link "Ladies Watches |" [ref=e1254] [cursor=pointer]:
            - /url: /women-watches
          - link "Bags |" [ref=e1255] [cursor=pointer]:
            - /url: /bags
          - link "Sport Shoes |" [ref=e1256] [cursor=pointer]:
            - /url: /sports-shoes
          - link "Reebok Shoes |" [ref=e1257] [cursor=pointer]:
            - /url: /reebok-shoes
          - link "Puma Shoes |" [ref=e1258] [cursor=pointer]:
            - /url: /puma-shoes
          - link "Boxers |" [ref=e1259] [cursor=pointer]:
            - /url: /men-boxers
          - link "Wallets |" [ref=e1260] [cursor=pointer]:
            - /url: /wallets
          - link "Tops |" [ref=e1261] [cursor=pointer]:
            - /url: /women-shirts-tops-tees
          - link "Earrings |" [ref=e1262] [cursor=pointer]:
            - /url: /earrings
          - link "Fastrack Watches |" [ref=e1263] [cursor=pointer]:
            - /url: /fastrack-watches
          - link "Kurtis |" [ref=e1264] [cursor=pointer]:
            - /url: /women-kurtas-kurtis-suits
          - link "Nike |" [ref=e1265] [cursor=pointer]:
            - /url: /nike
          - link "Smart Watches |" [ref=e1266] [cursor=pointer]:
            - /url: /smart-watches
          - link "Titan Watches |" [ref=e1267] [cursor=pointer]:
            - /url: /titan-watches
          - link "Designer Blouse |" [ref=e1268] [cursor=pointer]:
            - /url: /saree-blouse
          - link "Gowns |" [ref=e1269] [cursor=pointer]:
            - /url: /gown
          - link "Rings |" [ref=e1270] [cursor=pointer]:
            - /url: /rings
          - link "Cricket Shoes |" [ref=e1271] [cursor=pointer]:
            - /url: /cricket-shoes
          - link "Forever 21 |" [ref=e1272] [cursor=pointer]:
            - /url: /forever-21
          - link "Eye Makeup |" [ref=e1273] [cursor=pointer]:
            - /url: /eye-makeup
          - link "Photo Frames |" [ref=e1274] [cursor=pointer]:
            - /url: /photo-frames
          - link "Punjabi Suits |" [ref=e1275] [cursor=pointer]:
            - /url: /punjabi-suits
          - link "Bikini |" [ref=e1276] [cursor=pointer]:
            - /url: /bikini
          - link "Myntra Fashion Show |" [ref=e1277] [cursor=pointer]:
            - /url: /shop/myntra-fashion-superstar
          - link "Lipstick |" [ref=e1278] [cursor=pointer]:
            - /url: /lipstick
          - link "Saree |" [ref=e1279] [cursor=pointer]:
            - /url: /saree
          - link "Watches |" [ref=e1280] [cursor=pointer]:
            - /url: /watches
          - link "Dresses |" [ref=e1281] [cursor=pointer]:
            - /url: /dresses
          - link "Lehenga |" [ref=e1282] [cursor=pointer]:
            - /url: /lehengas
          - link "Nike Shoes |" [ref=e1283] [cursor=pointer]:
            - /url: /nike-shoes
          - link "Goggles |" [ref=e1284] [cursor=pointer]:
            - /url: /goggles
          - link "Bras |" [ref=e1285] [cursor=pointer]:
            - /url: /bra
          - link "Suit |" [ref=e1286] [cursor=pointer]:
            - /url: /men-suits
          - link "Chinos |" [ref=e1287] [cursor=pointer]:
            - /url: /chinos
          - link "Shoes |" [ref=e1288] [cursor=pointer]:
            - /url: /shoes
          - link "Adidas Shoes |" [ref=e1289] [cursor=pointer]:
            - /url: /adidas-shoes
          - link "Woodland Shoes |" [ref=e1290] [cursor=pointer]:
            - /url: /woodland-shoes
          - link "Jewellery |" [ref=e1291] [cursor=pointer]:
            - /url: /jewellery
          - link "Designers Sarees" [ref=e1292] [cursor=pointer]:
            - /url: /designer-saree
      - generic [ref=e1293]:
        - generic [ref=e1294]:
          - text: In case of any concern,
          - link "Contact Us" [ref=e1295] [cursor=pointer]:
            - /url: /contactus
        - generic [ref=e1296]: © 2026 www.myntra.com. All rights reserved.
        - link "A Flipkart company" [ref=e1298] [cursor=pointer]:
          - /url: https://www.flipkart.com/
      - generic [ref=e1299]:
        - paragraph [ref=e1300]: Registered Office Address
        - generic [ref=e1301]:
          - generic [ref=e1302]:
            - text: Buildings Alyssa,
            - text: Begonia and Clover situated in Embassy Tech Village,
            - text: Outer Ring Road,
            - text: Devarabeesanahalli Village,
            - text: Varthur Hobli,
            - text: Bengaluru – 560103, India
          - generic [ref=e1303]:
            - paragraph [ref=e1304]: "CIN: U72300KA2007PTC041799"
            - paragraph [ref=e1305]:
              - text: "Telephone:"
              - link "080‑40011450" [ref=e1306] [cursor=pointer]:
                - /url: tel:080‑40011450
      - generic [ref=e1307]:
        - heading "ONLINE SHOPPING MADE EASY AT MYNTRA" [level=1] [ref=e1308]:
          - strong [ref=e1309]: ONLINE SHOPPING MADE EASY AT MYNTRA
        - paragraph [ref=e1310]:
          - text: If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including
          - link "clothing" [ref=e1311] [cursor=pointer]:
            - /url: /clothing
          - text: ", footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep."
        - heading "BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION" [level=3] [ref=e1312]:
          - strong [ref=e1313]: BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION
        - paragraph [ref=e1314]: Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.
        - list [ref=e1315]:
          - listitem [ref=e1316]:
            - strong [ref=e1317]: Smart men’s clothing
            - text: "- At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit."
          - listitem [ref=e1318]:
            - strong [ref=e1319]: Trendy women’s clothing
            - text: "-"
            - link "Online shopping for women" [ref=e1320] [cursor=pointer]:
              - /url: /shop/women
            - text: at Myntra is a mood-elevating experience. Look hip and stay comfortable with chinos and printed shorts this summer. Look hot on your date dressed in a little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand
            - link "sarees" [ref=e1321] [cursor=pointer]:
              - /url: /saree
            - text: and lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.
          - listitem [ref=e1322]:
            - strong [ref=e1323]: Fashionable footwear
            - text: "- While clothes maketh the man, the type of footwear you wear reflects your personality. We bring you an exhaustive lineup of options in casual shoes for men, such as sneakers and loafers. Make a power statement at work dressed in brogues and oxfords. Practice for your marathon with running shoes for men and women. Choose shoes for individual games such as tennis, football, basketball, and the like. Or step into the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup of fashionable footwear for ladies, including pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort and style with embellished and metallic flats."
          - listitem [ref=e1324]:
            - strong [ref=e1325]: Stylish accessories
            - text: "- Myntra is one of the best online shopping sites for classy accessories that perfectly complement your outfits. You can select smart analogue or digital watches and match them up with belts and ties. Pick up spacious bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and sparkling pieces, our online jewellery collection offers you many impressive options."
          - listitem [ref=e1326]:
            - strong [ref=e1327]: Fun and frolic
            - text: "- Online shopping for kids at Myntra is a complete joy. Your little princess is going to love the wide variety of pretty dresses, ballerina shoes, headbands and clips. Delight your son by picking up sports shoes, superhero T-shirts, football jerseys and much more from our online store. Check out our lineup of toys with which you can create memories to cherish."
          - listitem [ref=e1328]:
            - strong [ref=e1329]: Beauty begins here
            - text: "- You can also refresh, rejuvenate and reveal beautiful skin with personal care, beauty and grooming products from Myntra. Our soaps, shower gels, skin care creams, lotions and other ayurvedic products are specially formulated to reduce the effect of aging and offer the ideal cleansing experience. Keep your scalp clean and your hair uber-stylish with shampoos and hair care products. Choose makeup to enhance your natural beauty."
        - paragraph [ref=e1330]:
          - text: Myntra is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks,
          - link "photo frames" [ref=e1331] [cursor=pointer]:
            - /url: /photo-frames
          - text: and artificial plants are sure to breathe life into any corner of your home.
        - heading "AFFORDABLE FASHION AT YOUR FINGERTIPS" [level=3] [ref=e1332]:
          - strong [ref=e1333]: AFFORDABLE FASHION AT YOUR FINGERTIPS
        - paragraph [ref=e1334]: Myntra is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.
        - heading "MYNTRA INSIDER" [level=3] [ref=e1335]:
          - strong [ref=e1336]: MYNTRA INSIDER
        - paragraph [ref=e1337]:
          - text: Every online shopping experience is precious. Hence, a cashless reward-based customer loyalty program called
          - link "Myntra Insider" [ref=e1338] [cursor=pointer]:
            - /url: /myntrainsider
          - text: was introduced to enhance your online experience. The program is applicable to every registered customer and measures rewards in the form of Insider Points.
        - paragraph [ref=e1339]: There are four levels to achieve in the program, as the Insider Points accumulate. They are - Insider, Select, Elite or Icon. Apart from offering discounts on Myntra and partner platform coupons, each tier comes with its own special perks.
        - paragraph [ref=e1340]:
          - strong [ref=e1341]: Insider
        - list [ref=e1342]:
          - listitem [ref=e1343]: Opportunity to master any domain in fashion with tips from celebrity stylists at Myntra Masterclass sessions.
          - listitem [ref=e1344]: Curated collections from celeb stylists.
        - paragraph [ref=e1345]:
          - strong [ref=e1346]: Elite
        - list [ref=e1347]:
          - listitem [ref=e1348]: VIP access to special sale events such as the End of Reason Sale (EORS) and product launches.
          - listitem [ref=e1349]: Exclusive early access to Limited Edition products
        - paragraph [ref=e1350]:
          - strong [ref=e1351]: Icon
        - list [ref=e1352]:
          - listitem [ref=e1353]: Chance to get on guest lists for special events.
        - heading "Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To Miss Out On" [level=3] [ref=e1354]:
          - strong [ref=e1355]: Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To Miss Out On
        - paragraph [ref=e1356]: The world wide web is evolving at a relentless pace, and with an accelerated growth each passing year, there is bound to be an overwhelming surge of online content. It was for this very reason that personalisation of search feeds was proposed as a solution to combat the overload of irrelevant information.
        - paragraph [ref=e1357]: Several social media platforms such as Facebook and Instagram along with various online shopping websites have chosen to help filter content, increasing user engagement, retention and customer loyalty.
        - paragraph [ref=e1358]:
          - text: Myntra is one such online shopping website that joins the list of platforms that help curate a personalised fashion feed. Named the
          - link "Myntra Studio" [ref=e1359] [cursor=pointer]:
            - /url: /studio/home
          - text: ", this personalised search feed brings you the latest men and women’s fashion trends, celebrity styles, branded content and daily updates from your favourite fashion labels."
        - paragraph [ref=e1360]: If you are wondering how impactful Myntra Studio can be, we are listing out five perks of having a rich, meaningful, and personalised fashion feed in your life.
        - list [ref=e1361]:
          - listitem [ref=e1362]:
            - strong [ref=e1363]: Keep Up With What Your Favourite Fashion Icons Are Upto
          - paragraph [ref=e1364]: "The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion bloggers and stylists. The whole concept of building an outfit from scratch and showcasing it to a huge community of enthusiasts using the hashtag has helped individuals with understanding trends and making suitable for daily wear."
          - paragraph [ref=e1365]: Imagine if you could keep up with every piece of clothing and accessory worn by the fashion icons you look upto. From Sonam Kapoor to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’ feature to help track celebrity fashion trends, exploring details such as their outfit of the day. This way, you would not ever miss out on the latest celebrity fashion trends, from all around the world.
          - listitem [ref=e1366]:
            - strong [ref=e1367]: Quick Fashion Tip And Tricks
          - paragraph [ref=e1368]: Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain dresses or discovering multiple uses out of heavy ethnic wear, Myntra Studio will help you acquire some unique and useful fashion hacks. Each hack is designed with the intention to help you get the best wear out of everything in your wardrobe.
          - listitem [ref=e1369]:
            - strong [ref=e1370]: Updates on What Is Trending and New Product Launches
          - paragraph [ref=e1371]: Since fast fashion seems to be extremely hard to keep up with these days, a quick update on what is trending in accessories, clothing and footwear would certainly be of great help. Myntra Studio helps you stay connected to the most beloved and sought after brands such as Puma, Coverstory, The Label Life and so many more.
          - paragraph [ref=e1372]: Your feed keeps you updated with stories of what the brands are creating including clothing, footwear and jewellery, along with their new seasonal collections.
          - listitem [ref=e1373]:
            - strong [ref=e1374]: Explicit Step-By-Step Beauty Routines From Experts
          - paragraph [ref=e1375]: Just like fashion, the beauty community keeps on growing, and with brands such as Huda Beauty, MAC and the latest Kay Beauty by Katrina Kaif, are constantly coming up with mind-blowing products. Whether it is creating a no-makeup look, different winged eyeliners, do-it-yourself facial masks and other personal care beauty routines, Myntra Studio is here for you.
          - listitem [ref=e1376]:
            - strong [ref=e1377]: Celebrity Confessions And A Look Into Their Lives
          - paragraph [ref=e1378]: A bonus feature that Myntra Studio has in store for you is celebrity confessions and a peek into their lives. So, Myntra helps you stay connected to your most beloved celebrities in a matter of clicks.
          - paragraph [ref=e1379]: If you are very particular when it comes to the content you wish to view and engage with on social media, the ability to intricately filter content helps achieve that. Applying the same formula for hardcore fashion lovers and shoppers, Myntra Studio brings you a daily fashion fix incorporating everything that you love, all at one place. Sign up on Myntra today and start organising your fashion feed, just the way you want to.
        - heading "MYNTRA APP" [level=3] [ref=e1380]:
          - strong [ref=e1381]: MYNTRA APP
        - paragraph [ref=e1382]:
          - text: Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra app on your
          - link "Android" [ref=e1383] [cursor=pointer]:
            - /url: https://play.google.com/store/apps/details?id=com.myntra.android
          - text: or
          - link "IOS" [ref=e1384] [cursor=pointer]:
            - /url: https://itunes.apple.com/in/app/myntra-indias-fashion-store/id907394059
          - text: device today and experience shopping like never before!
        - heading "HISTORY OF MYNTRA" [level=3] [ref=e1385]:
          - strong [ref=e1386]: HISTORY OF MYNTRA
        - paragraph [ref=e1387]:
          - text: Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The original B2B venture for personalized
          - link "gifts" [ref=e1388] [cursor=pointer]:
            - /url: /gifts
          - text: was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.
        - paragraph [ref=e1389]: The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. Download the app on your Android or IOS device this very minute to experience fashion like never before
        - heading "SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE" [level=3] [ref=e1390]:
          - strong [ref=e1391]: SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE
        - paragraph [ref=e1392]: Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 14-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.
        - paragraph [ref=e1393]: Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.
```

# Test source

```ts
  1  | /**
  2  |  * MyntraPage — Page Object for the Myntra shopping flow
  3  |  */
  4  | 
  5  | import { Page, Locator, expect } from '@playwright/test';
  6  | import { BasePage } from './base.page';
  7  | 
  8  | export class MyntraPage extends BasePage {
  9  |   private readonly menLink: Locator;
  10 |   private readonly jeansLink: Locator;
  11 |   private readonly productCards: Locator;
  12 |   private readonly bagButton: Locator;
  13 | 
  14 |   constructor(page: Page) {
  15 |     super(page);
  16 |     this.menLink = page.getByRole('link', { name: 'Men', exact: true }).first();
  17 |     this.jeansLink = page.getByRole('link', { name: 'Jeans', exact: true });
  18 |     this.productCards = page.locator('.product-base');
  19 |     this.bagButton = page.getByText('Bag', { exact: true });
  20 |   }
  21 | 
  22 |   async open(): Promise<void> {
  23 |     await this.page.goto('https://www.myntra.com/', { waitUntil: 'domcontentloaded' });
  24 |   }
  25 | 
  26 |   async hoverMenMenu(): Promise<void> {
  27 |     await this.menLink.hover();
  28 |   }
  29 | 
  30 |   async navigateToJeans(): Promise<void> {
> 31 |     await this.jeansLink.click();
     |                          ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  32 |   }
  33 | 
  34 |   async getLastProductName(): Promise<string> {
  35 |     return await this.productCards.last().locator('h3').innerText();
  36 |   }
  37 | 
  38 |   async openLastProductInNewTab(): Promise<Page> {
  39 |     const [productPage] = await Promise.all([
  40 |       this.page.waitForEvent('popup'),
  41 |       this.productCards.last().click(),
  42 |     ]);
  43 | 
  44 |     await productPage.waitForLoadState('domcontentloaded');
  45 |     return productPage;
  46 |   }
  47 | 
  48 |   async selectSizeOnProductPage(productPage: Page, size: string): Promise<void> {
  49 |     await productPage.getByRole('button', { name: size, exact: true }).click();
  50 |   }
  51 | 
  52 |   async addProductToBag(productPage: Page): Promise<void> {
  53 |     await productPage.getByText('ADD TO BAG', { exact: true }).click();
  54 |   }
  55 | 
  56 |   async openBagOnProductPage(productPage: Page): Promise<void> {
  57 |     await productPage.getByText('Bag', { exact: true }).click();
  58 |   }
  59 | 
  60 |   async openBag(): Promise<void> {
  61 |     await this.bagButton.click();
  62 |   }
  63 | 
  64 |   getBagProductLocator(productName: string): Locator {
  65 |     return this.page.getByText(productName, { exact: true });
  66 |   }
  67 | }
  68 | 
```