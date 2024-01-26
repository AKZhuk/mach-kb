import './index.css';

import React from 'react';

const links = [
  {
    title: 'Competency:',
    email: 'OrgCompetencyMACH@epam.com',
    background: '#2629A4',
  },
  {
    title: 'Staffing:',
    email: 'OrgStaffingMACHCommittee@epam.com',
    background: '#DA5644',
  },
];

const FooterLogo = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='134'
      height='32'
      viewBox='0 0 134 32'
      fill='none'>
      <path
        d='M43.7386 15.6995L40.01 3.55625H39.9233C39.9377 3.84537 39.9594 4.27906 39.9883 4.85731C40.0172 5.43556 40.0461 6.05718 40.075 6.72217C40.1039 7.3727 40.1184 7.96541 40.1184 8.50029V15.6995H37.1918V0.216844H41.6575L45.3211 12.0565H45.3861L49.2665 0.216844H53.7322V15.6995H50.6756V8.37019C50.6756 7.87867 50.6828 7.31488 50.6973 6.6788C50.7262 6.04273 50.7478 5.44279 50.7623 4.879C50.7912 4.30074 50.8129 3.86706 50.8273 3.57793H50.7406L46.7519 15.6995H43.7386Z'
        fill='white'
      />
      <path
        d='M71.6677 15.6995L70.5405 12.0132H64.9042L63.7769 15.6995H60.2434L65.7062 0.151792H69.7167L75.2012 15.6995H71.6677ZM68.6328 5.65964C68.5605 5.41388 68.4666 5.10307 68.351 4.7272C68.2354 4.35134 68.1197 3.96825 68.0041 3.57793C67.8885 3.18761 67.7946 2.84789 67.7223 2.55876C67.65 2.84789 67.5489 3.20929 67.4188 3.64298C67.3032 4.06222 67.1876 4.46699 67.072 4.85731C66.9708 5.23317 66.8913 5.50062 66.8335 5.65964L65.7279 9.25925H69.76L68.6328 5.65964Z'
        fill='white'
      />
      <path
        d='M87.859 2.73224C87.2376 2.73224 86.6812 2.85512 86.1898 3.10087C85.7129 3.34663 85.3082 3.70081 84.9758 4.16341C84.6434 4.61155 84.3905 5.16089 84.2171 5.81142C84.0581 6.46196 83.9786 7.192 83.9786 8.00155C83.9786 9.10023 84.1087 10.0399 84.3688 10.8205C84.6434 11.5867 85.0698 12.1722 85.6478 12.577C86.2259 12.9817 86.963 13.1841 87.859 13.1841C88.4949 13.1841 89.1236 13.1118 89.745 12.9673C90.3809 12.8227 91.0674 12.6203 91.8044 12.3601V15.114C91.1252 15.3887 90.4531 15.5911 89.7883 15.7212C89.1236 15.8513 88.3793 15.9164 87.5555 15.9164C85.9658 15.9164 84.6507 15.5911 83.6101 14.9406C82.584 14.2756 81.8253 13.3504 81.3339 12.165C80.8425 10.9651 80.5969 9.57006 80.5969 7.97987C80.5969 6.80891 80.7558 5.73914 81.0738 4.77057C81.3917 3.78755 81.8542 2.94185 82.4612 2.23349C83.0826 1.52514 83.8413 0.975799 84.7374 0.58548C85.6478 0.19516 86.6884 0 87.859 0C88.625 0 89.3909 0.101194 90.1569 0.303582C90.9373 0.491514 91.6816 0.751727 92.3897 1.08422L91.3275 3.75141C90.7494 3.47674 90.1641 3.23821 89.5716 3.03582C88.9935 2.83343 88.4226 2.73224 87.859 2.73224Z'
        fill='white'
      />
      <path
        d='M112.327 15.6995H109.054V9.02072H102.919V15.6995H99.6458V0.216844H102.919V6.28848H109.054V0.216844H112.327V15.6995Z'
        fill='white'
      />
      <path
        d='M38.8177 24.2091C38.5017 24.2091 38.2186 24.2657 37.9682 24.379C37.7178 24.4864 37.5032 24.6474 37.3243 24.862C37.1515 25.0767 37.0173 25.3361 36.9219 25.6402C36.8325 25.9444 36.7878 26.2872 36.7878 26.6689C36.7878 27.1698 36.8623 27.6051 37.0114 27.9748C37.1604 28.3386 37.384 28.6189 37.682 28.8156C37.9801 29.0124 38.3557 29.1108 38.8087 29.1108C39.083 29.1108 39.3453 29.087 39.5957 29.0393C39.852 28.9856 40.1113 28.917 40.3736 28.8335V29.6654C40.1232 29.7608 39.8669 29.8294 39.6046 29.8711C39.3423 29.9188 39.0383 29.9427 38.6925 29.9427C38.0427 29.9427 37.5002 29.8085 37.065 29.5402C36.6358 29.2718 36.3139 28.8902 36.0993 28.3952C35.8847 27.9003 35.7773 27.3219 35.7773 26.6599C35.7773 26.1769 35.8429 25.7356 35.9741 25.3361C36.1112 24.9306 36.3079 24.5818 36.5643 24.2896C36.8206 23.9974 37.1366 23.7737 37.5121 23.6187C37.8937 23.4577 38.3318 23.3772 38.8266 23.3772C39.1485 23.3772 39.4645 23.413 39.7745 23.4845C40.0845 23.5501 40.3647 23.6455 40.6151 23.7708L40.2574 24.5758C40.0487 24.4804 39.8222 24.3969 39.5778 24.3253C39.3393 24.2478 39.086 24.2091 38.8177 24.2091Z'
        fill='white'
      />
      <path
        d='M46.7835 27.4381C46.7835 27.8377 46.7298 28.1925 46.6225 28.5026C46.5152 28.8127 46.3632 29.075 46.1665 29.2897C45.9698 29.5044 45.7313 29.6684 45.4511 29.7817C45.1709 29.889 44.855 29.9427 44.5032 29.9427C44.1813 29.9427 43.8833 29.889 43.609 29.7817C43.3348 29.6684 43.0963 29.5044 42.8937 29.2897C42.6969 29.075 42.5419 28.8127 42.4287 28.5026C42.3154 28.1925 42.2588 27.8347 42.2588 27.4292C42.2588 26.8985 42.3482 26.4482 42.527 26.0785C42.7118 25.7088 42.9741 25.4285 43.3139 25.2377C43.6597 25.0409 44.0651 24.9425 44.5301 24.9425C44.9712 24.9425 45.3587 25.0409 45.6926 25.2377C46.0324 25.4285 46.2976 25.7088 46.4884 26.0785C46.6851 26.4482 46.7835 26.9015 46.7835 27.4381ZM43.2335 27.4381C43.2335 27.7959 43.2782 28.106 43.3676 28.3684C43.457 28.6248 43.5971 28.8216 43.7879 28.9588C43.9786 29.0959 44.2231 29.1645 44.5211 29.1645C44.8192 29.1645 45.0636 29.0959 45.2544 28.9588C45.4452 28.8216 45.5852 28.6248 45.6747 28.3684C45.7641 28.106 45.8088 27.7959 45.8088 27.4381C45.8088 27.0684 45.7611 26.7583 45.6657 26.5079C45.5763 26.2574 45.4362 26.0666 45.2454 25.9354C45.0606 25.7983 44.8162 25.7297 44.5122 25.7297C44.0651 25.7297 43.7402 25.8788 43.5375 26.1769C43.3348 26.4751 43.2335 26.8955 43.2335 27.4381Z'
        fill='white'
      />
      <path
        d='M54.2804 24.9425C54.8229 24.9425 55.2313 25.0827 55.5055 25.3629C55.7797 25.6432 55.9168 26.0934 55.9168 26.7136V29.8532H54.969V26.8388C54.969 26.4691 54.8944 26.1918 54.7454 26.007C54.6023 25.8161 54.3758 25.7207 54.0658 25.7207C53.6366 25.7207 53.3296 25.8549 53.1448 26.1233C52.9599 26.3856 52.8675 26.7673 52.8675 27.2682V29.8532H51.9286V26.8388C51.9286 26.5943 51.8928 26.3886 51.8213 26.2216C51.7557 26.0547 51.6574 25.9294 51.5262 25.846C51.3951 25.7625 51.2252 25.7207 51.0165 25.7207C50.7184 25.7207 50.483 25.7863 50.3101 25.9175C50.1372 26.0487 50.012 26.2425 49.9345 26.4989C49.863 26.7494 49.8272 27.0565 49.8272 27.4203V29.8532H48.8793V25.032H49.6305L49.7646 25.676H49.8183C49.9196 25.509 50.0418 25.3719 50.1849 25.2645C50.3339 25.1572 50.4979 25.0767 50.6767 25.023C50.8556 24.9694 51.0404 24.9425 51.2311 24.9425C51.5948 24.9425 51.9018 25.0081 52.1522 25.1393C52.4026 25.2645 52.5844 25.4584 52.6976 25.7207H52.7692C52.9242 25.4524 53.1388 25.2556 53.413 25.1304C53.6872 25.0051 53.9764 24.9425 54.2804 24.9425Z'
        fill='white'
      />
      <path
        d='M60.6671 24.9425C61.2454 24.9425 61.7104 25.1512 62.0621 25.5687C62.4198 25.9861 62.5986 26.6093 62.5986 27.4381C62.5986 27.9808 62.5181 28.44 62.3572 28.8156C62.1962 29.1913 61.9697 29.4746 61.6776 29.6654C61.3854 29.8503 61.0456 29.9427 60.6581 29.9427C60.4137 29.9427 60.1991 29.9129 60.0143 29.8532C59.8295 29.7876 59.6715 29.7042 59.5404 29.6028C59.4152 29.4954 59.3049 29.3821 59.2095 29.2629H59.1469C59.1648 29.3702 59.1797 29.4984 59.1916 29.6475C59.2036 29.7906 59.2095 29.9188 59.2095 30.0321V32H58.2616V25.032H59.0307L59.1648 25.676H59.2095C59.3049 25.5448 59.4182 25.4226 59.5493 25.3093C59.6805 25.196 59.8384 25.1065 60.0233 25.0409C60.2081 24.9753 60.4227 24.9425 60.6671 24.9425ZM60.4435 25.7207C60.1455 25.7207 59.907 25.7804 59.7282 25.8996C59.5493 26.0129 59.4182 26.1859 59.3347 26.4184C59.2572 26.645 59.2155 26.9342 59.2095 27.2861V27.4292C59.2095 27.7989 59.2483 28.115 59.3258 28.3773C59.4033 28.6338 59.5314 28.8305 59.7103 28.9677C59.8951 29.0989 60.1455 29.1645 60.4614 29.1645C60.7297 29.1645 60.9473 29.0929 61.1142 28.9498C61.2871 28.8007 61.4153 28.595 61.4987 28.3326C61.5822 28.0702 61.6239 27.7661 61.6239 27.4203C61.6239 26.8955 61.5285 26.481 61.3378 26.1769C61.147 25.8728 60.8489 25.7207 60.4435 25.7207Z'
        fill='white'
      />
      <path
        d='M66.5968 24.9425C67.0201 24.9425 67.3837 25.032 67.6878 25.2109C67.9918 25.3838 68.2243 25.6343 68.3853 25.9622C68.5522 26.2902 68.6356 26.6778 68.6356 27.1251V27.6439H65.3986C65.4105 28.1388 65.5387 28.5175 65.7831 28.7799C66.0335 29.0422 66.3822 29.1734 66.8293 29.1734C67.1393 29.1734 67.4135 29.1466 67.652 29.0929C67.8964 29.0333 68.1468 28.9468 68.4031 28.8335V29.6207C68.1647 29.728 67.9203 29.8085 67.6699 29.8622C67.4255 29.9159 67.1333 29.9427 66.7935 29.9427C66.3285 29.9427 65.9172 29.8503 65.5595 29.6654C65.2018 29.4805 64.9216 29.2062 64.719 28.8425C64.5222 28.4728 64.4239 28.0196 64.4239 27.4829C64.4239 26.9402 64.5133 26.481 64.6921 26.1054C64.8769 25.7297 65.1303 25.4434 65.4522 25.2467C65.7801 25.0439 66.1616 24.9425 66.5968 24.9425ZM66.5968 25.676C66.257 25.676 65.9828 25.7863 65.7741 26.007C65.5714 26.2276 65.4522 26.5407 65.4164 26.9462H67.6878C67.6878 26.6957 67.649 26.4751 67.5715 26.2843C67.494 26.0934 67.3748 25.9444 67.2138 25.837C67.0529 25.7297 66.8472 25.676 66.5968 25.676Z'
        fill='white'
      />
      <path
        d='M72.4474 29.1734C72.5726 29.1734 72.7007 29.1615 72.8319 29.1377C72.963 29.1138 73.0763 29.087 73.1717 29.0572V29.7727C73.0704 29.8204 72.9332 29.8592 72.7604 29.889C72.5875 29.9248 72.4146 29.9427 72.2417 29.9427C71.9794 29.9427 71.738 29.898 71.5174 29.8085C71.3028 29.7191 71.1299 29.564 70.9987 29.3434C70.8676 29.1227 70.802 28.8156 70.802 28.4221V25.7565H70.1314V25.3272L70.8378 24.9694L71.1686 23.9497H71.7499V25.032H73.127V25.7565H71.7499V28.4042C71.7499 28.6666 71.8125 28.8604 71.9377 28.9856C72.0688 29.1108 72.2387 29.1734 72.4474 29.1734Z'
        fill='white'
      />
      <path
        d='M76.9257 24.9425C77.349 24.9425 77.7127 25.032 78.0167 25.2109C78.3207 25.3838 78.5532 25.6343 78.7142 25.9622C78.8811 26.2902 78.9646 26.6778 78.9646 27.1251V27.6439H75.7275C75.7394 28.1388 75.8676 28.5175 76.112 28.7799C76.3624 29.0422 76.7111 29.1734 77.1582 29.1734C77.4682 29.1734 77.7425 29.1466 77.9809 29.0929C78.2253 29.0333 78.4757 28.9468 78.7321 28.8335V29.6207C78.4936 29.728 78.2492 29.8085 77.9988 29.8622C77.7544 29.9159 77.4623 29.9427 77.1225 29.9427C76.6575 29.9427 76.2461 29.8503 75.8884 29.6654C75.5308 29.4805 75.2506 29.2062 75.0479 28.8425C74.8512 28.4728 74.7528 28.0196 74.7528 27.4829C74.7528 26.9402 74.8422 26.481 75.0211 26.1054C75.2059 25.7297 75.4592 25.4434 75.7811 25.2467C76.109 25.0439 76.4906 24.9425 76.9257 24.9425ZM76.9257 25.676C76.5859 25.676 76.3117 25.7863 76.1031 26.007C75.9004 26.2276 75.7811 26.5407 75.7454 26.9462H78.0167C78.0167 26.6957 77.9779 26.4751 77.9004 26.2843C77.8229 26.0934 77.7037 25.9444 77.5428 25.837C77.3818 25.7297 77.1761 25.676 76.9257 25.676Z'
        fill='white'
      />
      <path
        d='M83.4827 24.9425C84.0431 24.9425 84.4723 25.0827 84.7704 25.3629C85.0685 25.6432 85.2175 26.0934 85.2175 26.7136V29.8532H84.2786V26.8478C84.2786 26.4721 84.1981 26.1918 84.0372 26.007C83.8822 25.8161 83.6318 25.7207 83.286 25.7207C82.7972 25.7207 82.4574 25.8668 82.2666 26.159C82.0818 26.4512 81.9894 26.8716 81.9894 27.4203V29.8532H81.0415V25.032H81.7927L81.9268 25.676H81.9805C82.0878 25.509 82.2189 25.3719 82.3739 25.2645C82.5289 25.1572 82.7018 25.0767 82.8926 25.023C83.0833 24.9694 83.2801 24.9425 83.4827 24.9425Z'
        fill='white'
      />
      <path
        d='M89.5087 29.9427C89.0676 29.9427 88.6801 29.8562 88.3462 29.6833C88.0124 29.5104 87.7531 29.242 87.5683 28.8783C87.3835 28.5085 87.2911 28.0404 87.2911 27.4739C87.2911 26.8776 87.3894 26.3946 87.5862 26.0249C87.7888 25.6551 88.0601 25.3838 88.3999 25.2109C88.7457 25.032 89.1391 24.9425 89.5803 24.9425C89.8485 24.9425 90.0989 24.9724 90.3314 25.032C90.5699 25.0857 90.7666 25.1483 90.9216 25.2198L90.6355 25.9891C90.4685 25.9235 90.2897 25.8668 90.0989 25.8191C89.9141 25.7714 89.7382 25.7476 89.5713 25.7476C89.2733 25.7476 89.0259 25.8132 88.8291 25.9444C88.6384 26.0696 88.4953 26.2604 88.3999 26.5168C88.3105 26.7673 88.2658 27.0833 88.2658 27.465C88.2658 27.8287 88.3135 28.1358 88.4088 28.3863C88.5042 28.6367 88.6443 28.8276 88.8291 28.9588C89.0199 29.084 89.2554 29.1466 89.5356 29.1466C89.8038 29.1466 90.0393 29.1168 90.242 29.0572C90.4447 28.9975 90.6354 28.92 90.8143 28.8246V29.6475C90.6414 29.7489 90.4536 29.8234 90.2509 29.8711C90.0482 29.9188 89.8008 29.9427 89.5087 29.9427Z'
        fill='white'
      />
      <path
        d='M92.113 25.032H93.1324L94.1339 27.7691C94.1876 27.9063 94.2353 28.0404 94.277 28.1716C94.3187 28.3028 94.3545 28.434 94.3843 28.5652C94.4201 28.6904 94.4469 28.8156 94.4648 28.9409H94.5006C94.5304 28.7858 94.5781 28.604 94.6436 28.3952C94.7092 28.1806 94.7778 27.9689 94.8493 27.7602L95.7972 25.032H96.8166L94.7509 30.5062C94.6377 30.8163 94.4976 31.0817 94.3307 31.3023C94.1637 31.5289 93.964 31.7018 93.7315 31.8211C93.505 31.9404 93.2367 32 92.9267 32C92.7777 32 92.6495 31.9911 92.5422 31.9732C92.4349 31.9612 92.3425 31.9463 92.265 31.9284V31.1771C92.3306 31.189 92.4081 31.2009 92.4975 31.2129C92.5929 31.2248 92.6913 31.2307 92.7926 31.2307C92.9774 31.2307 93.1354 31.195 93.2665 31.1234C93.4037 31.0518 93.5169 30.9505 93.6063 30.8193C93.7017 30.6881 93.7822 30.539 93.8478 30.372L94.0445 29.8532L92.113 25.032Z'
        fill='white'
      />
      <path
        d='M104.508 24.2091C104.192 24.2091 103.909 24.2657 103.658 24.379C103.408 24.4864 103.193 24.6474 103.015 24.862C102.842 25.0767 102.707 25.3361 102.612 25.6402C102.523 25.9444 102.478 26.2872 102.478 26.6689C102.478 27.1698 102.552 27.6051 102.702 27.9748C102.851 28.3386 103.074 28.6189 103.372 28.8156C103.67 29.0124 104.046 29.1108 104.499 29.1108C104.773 29.1108 105.035 29.087 105.286 29.0393C105.542 28.9856 105.801 28.917 106.064 28.8335V29.6654C105.813 29.7608 105.557 29.8294 105.295 29.8711C105.032 29.9188 104.728 29.9427 104.383 29.9427C103.733 29.9427 103.19 29.8085 102.755 29.5402C102.326 29.2718 102.004 28.8902 101.789 28.3952C101.575 27.9003 101.468 27.3219 101.468 26.6599C101.468 26.1769 101.533 25.7356 101.664 25.3361C101.801 24.9306 101.998 24.5818 102.254 24.2896C102.511 23.9974 102.827 23.7737 103.202 23.6187C103.584 23.4577 104.022 23.3772 104.517 23.3772C104.839 23.3772 105.155 23.413 105.465 23.4845C105.775 23.5501 106.055 23.6455 106.305 23.7708L105.948 24.5758C105.739 24.4804 105.512 24.3969 105.268 24.3253C105.029 24.2478 104.776 24.2091 104.508 24.2091Z'
        fill='white'
      />
      <path
        d='M110.122 24.9425C110.545 24.9425 110.909 25.032 111.213 25.2109C111.517 25.3838 111.749 25.6343 111.91 25.9622C112.077 26.2902 112.161 26.6778 112.161 27.1251V27.6439H108.924C108.936 28.1388 109.064 28.5175 109.308 28.7799C109.559 29.0422 109.907 29.1734 110.354 29.1734C110.664 29.1734 110.939 29.1466 111.177 29.0929C111.421 29.0333 111.672 28.9468 111.928 28.8335V29.6207C111.69 29.728 111.445 29.8085 111.195 29.8622C110.951 29.9159 110.658 29.9427 110.319 29.9427C109.854 29.9427 109.442 29.8503 109.085 29.6654C108.727 29.4805 108.447 29.2062 108.244 28.8425C108.047 28.4728 107.949 28.0196 107.949 27.4829C107.949 26.9402 108.038 26.481 108.217 26.1054C108.402 25.7297 108.655 25.4434 108.977 25.2467C109.305 25.0439 109.687 24.9425 110.122 24.9425ZM110.122 25.676C109.782 25.676 109.508 25.7863 109.299 26.007C109.097 26.2276 108.977 26.5407 108.942 26.9462H111.213C111.213 26.6957 111.174 26.4751 111.097 26.2843C111.019 26.0934 110.9 25.9444 110.739 25.837C110.578 25.7297 110.372 25.676 110.122 25.676Z'
        fill='white'
      />
      <path
        d='M116.679 24.9425C117.239 24.9425 117.668 25.0827 117.967 25.3629C118.265 25.6432 118.414 26.0934 118.414 26.7136V29.8532H117.475V26.8478C117.475 26.4721 117.394 26.1918 117.233 26.007C117.078 25.8161 116.828 25.7207 116.482 25.7207C115.993 25.7207 115.654 25.8668 115.463 26.159C115.278 26.4512 115.186 26.8716 115.186 27.4203V29.8532H114.238V25.032H114.989L115.123 25.676H115.177C115.284 25.509 115.415 25.3719 115.57 25.2645C115.725 25.1572 115.898 25.0767 116.089 25.023C116.279 24.9694 116.476 24.9425 116.679 24.9425Z'
        fill='white'
      />
      <path
        d='M122.499 29.1734C122.624 29.1734 122.753 29.1615 122.884 29.1377C123.015 29.1138 123.128 29.087 123.224 29.0572V29.7727C123.122 29.8204 122.985 29.8592 122.812 29.889C122.639 29.9248 122.466 29.9427 122.294 29.9427C122.031 29.9427 121.79 29.898 121.569 29.8085C121.355 29.7191 121.182 29.564 121.051 29.3434C120.919 29.1227 120.854 28.8156 120.854 28.4221V25.7565H120.183V25.3272L120.89 24.9694L121.22 23.9497H121.802V25.032H123.179V25.7565H121.802V28.4042C121.802 28.6666 121.864 28.8604 121.989 28.9856C122.121 29.1108 122.291 29.1734 122.499 29.1734Z'
        fill='white'
      />
      <path
        d='M126.978 24.9425C127.401 24.9425 127.764 25.032 128.069 25.2109C128.373 25.3838 128.605 25.6343 128.766 25.9622C128.933 26.2902 129.016 26.6778 129.016 27.1251V27.6439H125.779C125.791 28.1388 125.919 28.5175 126.164 28.7799C126.414 29.0422 126.763 29.1734 127.21 29.1734C127.52 29.1734 127.794 29.1466 128.033 29.0929C128.277 29.0333 128.528 28.9468 128.784 28.8335V29.6207C128.545 29.728 128.301 29.8085 128.051 29.8622C127.806 29.9159 127.514 29.9427 127.174 29.9427C126.709 29.9427 126.298 29.8503 125.94 29.6654C125.583 29.4805 125.302 29.2062 125.1 28.8425C124.903 28.4728 124.805 28.0196 124.805 27.4829C124.805 26.9402 124.894 26.481 125.073 26.1054C125.258 25.7297 125.511 25.4434 125.833 25.2467C126.161 25.0439 126.542 24.9425 126.978 24.9425ZM126.978 25.676C126.638 25.676 126.364 25.7863 126.155 26.007C125.952 26.2276 125.833 26.5407 125.797 26.9462H128.069C128.069 26.6957 128.03 26.4751 127.952 26.2843C127.875 26.0934 127.756 25.9444 127.595 25.837C127.434 25.7297 127.228 25.676 126.978 25.676Z'
        fill='white'
      />
      <path
        d='M133.472 24.9425C133.555 24.9425 133.648 24.9485 133.749 24.9604C133.851 24.9664 133.934 24.9753 134 24.9873L133.901 25.8728C133.836 25.8549 133.758 25.84 133.669 25.8281C133.579 25.8161 133.496 25.8102 133.418 25.8102C133.239 25.8102 133.067 25.846 132.9 25.9175C132.739 25.9831 132.593 26.0815 132.461 26.2127C132.33 26.3379 132.226 26.493 132.149 26.6778C132.077 26.8627 132.041 27.0744 132.041 27.3129V29.8532H131.093V25.032H131.844L131.97 25.8907H132.005C132.107 25.7178 132.229 25.5597 132.372 25.4166C132.515 25.2735 132.679 25.1602 132.864 25.0767C133.049 24.9873 133.251 24.9425 133.472 24.9425Z'
        fill='white'
      />
      <rect
        x='16.8555'
        y='0.194824'
        width='9.29319'
        height='9.29592'
        rx='2.92654'
        fill='#D45341'
      />
      <path
        d='M0 4.65814C0 3.57491 0.877873 2.69678 1.96078 2.69678H4.83119C5.9141 2.69678 6.79197 3.57491 6.79197 4.65814V6.60264C7.11971 8.33252 8.08604 9.64526 9.58043 10.3681C9.72782 10.3681 9.88201 10.3681 10.0107 10.3681H13.7617C14.8446 10.3681 15.7224 11.2462 15.7224 12.3294V15.3606C15.9431 17.2619 17.0948 18.7092 18.8418 19.3043H24.9592C26.0421 19.3043 26.9199 20.1825 26.9199 21.2657V27.4115C26.9199 28.4948 26.0421 29.3729 24.9592 29.3729H18.8151C17.7322 29.3729 16.8543 28.4948 16.8543 27.4115V21.619C16.5602 19.923 15.5019 18.6335 13.933 18.0429C13.8773 18.0476 13.8186 18.0429 13.7617 18.0429H10.6546C8.69871 18.3503 7.26582 19.6446 6.79197 21.5368V24.1369C6.79197 25.2202 5.9141 26.0983 4.83119 26.0983H1.96078C0.877872 26.0983 0 25.2202 0 24.1369V21.2657C0 20.1825 0.877873 19.3043 1.96078 19.3043H4.66526C6.32522 18.9126 7.5538 17.7731 8.05117 16.1535C8.05031 16.1296 8.04988 16.1056 8.04988 16.0815V12.7012C7.54136 11.1887 6.44355 10.0526 4.94798 9.49075C4.90304 9.49075 4.8718 9.49075 4.83119 9.49075H1.96078C0.877872 9.49075 0 8.61262 0 7.52939V4.65814Z'
        fill='white'
      />
    </svg>
  );
};

const FooterText = ({menuList}) => (
  <section>
    <p>
      The Alliance was formed in June 2020 as a non-profit co-operation to introduce a new, open and
      best-of-breed enterprise technology ecosystem. Founded by Commercetools, Contentstack, EPAM Systems and
      Valtech and counting 15 members at launch, the MACH Alliance is set to grow and expand over the coming
      years.
    </p>
    <p>
      The goal is to help enterprise organisations navigate the complex modern technology landscape. We aim to
      guide and show how businesses can benefit from open tech ecosystems that are Micro-services based,
      API-first, Cloud-native SaaS and Headless.
    </p>
    <p>
      All MACH Alliance members meet certification principles. The MACH Alliance welcomes technology companies
      and individual industry experts who share our vision for the future. We invite vendors and system
      integrators to take the tests shown below to find out whether they comply.
    </p>
  </section>
);

const FooterMenuContainer = () => (
  <div className='footer-menu-container'>
    <FooterLogo />
    <FooterText />
  </div>
);

const ContactUsList = ({links}) => (
  <div className='footer-links-container'>
    {links.map(({email, title, background}) => (
      <div
        style={{background: background}}
        className='footer-links-item'>
        <span>{title}</span>
        <a
          href={`mailto:${email}`}
          key={title}
          target='_blank'
          rel='noopener noreferrer'>
          {email}
        </a>
      </div>
    ))}
  </div>
);

export const Footer = () => (
  <div className='mach-footer-wrapper'>
    <FooterMenuContainer />
    <ContactUsList links={links} />
  </div>
);

// const container = document.getElementById("drupal-footer");
// const root = ReactDOM.createRoot(container);
// root.render(<DrupalFooter/>);