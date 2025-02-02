import clsx from "clsx";
import { usePathname } from "next/navigation";

const useNavLinks = () => {
  const pathname = usePathname();
  return [
    {
      href: "/dashboard",
      name: "Dashboard",
      brief: "Widgets and History",
      icon: (
        <svg
          width="37"
          height="34"
          viewBox="0 0 37 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(
            pathname === "/dashboard" ? "nav-icon-active" : "nav-icon"
          )}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.22625 15.3H11.4793C11.7031 15.3 12.0712 15.3 12.4079 15.3272C12.8242 15.3612 13.5346 15.4564 14.2857 15.8423C15.0302 16.2253 15.6449 16.7902 16.0617 17.4743C16.4798 18.1628 16.5834 18.8156 16.6204 19.1981C16.6519 19.5092 16.65 19.8458 16.65 20.0515V29.2485C16.65 29.4542 16.65 29.7925 16.6204 30.1019C16.5834 30.4844 16.4816 31.1372 16.0599 31.8274C15.643 32.5115 15.0283 33.0764 14.2839 33.4594C13.7056 33.7515 13.0659 33.9266 12.4079 33.9728C12.0694 34 11.7031 34 11.4793 34H5.17075C4.94875 34 4.57875 34 4.24205 33.9728C3.58391 33.9261 2.94428 33.7504 2.36615 33.4577C1.62166 33.0747 1.00699 32.5098 0.59015 31.8257C0.271573 31.2944 0.0804412 30.7067 0.0296001 30.1019C5.83151e-08 29.7908 0 29.4542 0 29.2485V20.0515C0 19.8475 5.83151e-08 19.5075 0.0296001 19.1981C0.0666001 18.8156 0.1702 18.1628 0.59015 17.4743C1.00699 16.7902 1.62166 16.2253 2.36615 15.8423C2.94428 15.5496 3.58391 15.3739 4.24205 15.3272C4.5806 15.3 4.9469 15.3 5.17075 15.3H5.22625ZM3.8184 19.1352C3.7 19.329 3.7 19.584 3.7 20.1042V29.1992C3.7 29.7143 3.7 29.9727 3.8184 30.1648C3.90177 30.3016 4.0247 30.4146 4.1736 30.4912C4.3845 30.6 4.66385 30.6 5.22625 30.6H11.4237C11.9862 30.6 12.2674 30.6 12.4783 30.4912C12.6265 30.4143 12.7487 30.3014 12.8316 30.1648C12.95 29.9727 12.95 29.716 12.95 29.1975V20.1025C12.95 19.5857 12.95 19.329 12.8316 19.1335C12.748 18.9973 12.6251 18.8849 12.4764 18.8088C12.2674 18.7 11.988 18.7 11.4237 18.7H5.22625C4.66385 18.7 4.3845 18.7 4.17175 18.8088C4.02353 18.8857 3.90126 18.9986 3.8184 19.1352ZM5.22625 0H11.4793C11.7031 0 12.0712 5.27749e-08 12.4079 0.0272001C12.8242 0.0612001 13.5346 0.1564 14.2857 0.5423C15.0302 0.925346 15.6449 1.49018 16.0617 2.1743C16.4798 2.8628 16.5834 3.5156 16.6204 3.8981C16.6519 4.2092 16.65 4.5458 16.65 4.7515V8.8485C16.65 9.0542 16.65 9.3925 16.6204 9.7019C16.5834 10.0844 16.4816 10.7372 16.0599 11.4274C15.643 12.1115 15.0283 12.6764 14.2839 13.0594C13.7056 13.3516 13.0659 13.5266 12.4079 13.5728C12.0694 13.6017 11.7031 13.6 11.4793 13.6H5.17075C4.94875 13.6 4.57875 13.6 4.24205 13.5728C3.58391 13.5261 2.94428 13.3504 2.36615 13.0577C1.62166 12.6747 1.00699 12.1098 0.59015 11.4257C0.271573 10.8944 0.0804412 10.3067 0.0296001 9.7019C5.83151e-08 9.3908 0 9.0542 0 8.8485V4.7515C0 4.5475 5.83151e-08 4.2075 0.0296001 3.8981C0.0666001 3.5156 0.1702 2.8628 0.59015 2.1743C1.00699 1.49018 1.62166 0.925346 2.36615 0.5423C2.94428 0.249554 3.58391 0.073919 4.24205 0.0272001C4.5806 5.27749e-08 4.9469 0 5.17075 0H5.22625ZM3.8184 3.8352C3.7 4.029 3.7 4.284 3.7 4.8025V8.7975C3.7 9.3143 3.7 9.5727 3.8184 9.7665C3.90204 9.9027 4.02495 10.0151 4.1736 10.0912C4.3845 10.2 4.662 10.2 5.22625 10.2H11.4237C11.9862 10.2 12.2674 10.2 12.4783 10.0912C12.6265 10.0143 12.7487 9.9014 12.8316 9.7648C12.95 9.5727 12.95 9.316 12.95 8.7975V4.8025C12.95 4.2857 12.95 4.029 12.8316 3.8335C12.748 3.6973 12.6251 3.58495 12.4764 3.5088C12.2674 3.4 11.988 3.4 11.4237 3.4H5.22625C4.66385 3.4 4.3845 3.4 4.17175 3.5088C4.02353 3.58566 3.90126 3.6986 3.8184 3.8352ZM25.5763 18.7H31.8293C32.0531 18.7 32.4213 18.7 32.758 18.6728C33.1742 18.6388 33.8846 18.5453 34.6357 18.1577C35.3802 17.7747 35.9949 17.2098 36.4117 16.5257C36.8316 15.8372 36.9334 15.1844 36.9704 14.8019C37 14.4908 37 14.1542 37 13.9485V4.7515C37 4.5475 37 4.2075 36.9704 3.8981C36.9196 3.29333 36.7284 2.70556 36.4098 2.1743C35.993 1.49018 35.3783 0.925346 34.6339 0.5423C34.0557 0.249554 33.4161 0.073919 32.758 0.0272001C32.4194 5.27749e-08 32.0531 0 31.8293 0H25.5208C25.2988 0 24.9288 5.27749e-08 24.5921 0.0272001C24.1758 0.0612001 23.4654 0.1564 22.7162 0.5423C21.9717 0.925346 21.357 1.49018 20.9401 2.1743C20.6216 2.70556 20.4304 3.29333 20.3796 3.8981C20.35 4.2092 20.35 4.5458 20.35 4.7515V13.9485C20.35 14.1542 20.35 14.4925 20.3796 14.8019C20.4166 15.1844 20.5202 15.8372 20.9401 16.5274C21.357 17.2115 21.9717 17.7764 22.7162 18.1594C23.4654 18.5436 24.1758 18.6388 24.5921 18.6728C24.9306 18.7017 25.2969 18.7 25.5208 18.7H25.5763ZM24.1684 14.8648C24.05 14.671 24.05 14.416 24.05 13.8975V4.8025C24.05 4.2857 24.05 4.029 24.1684 3.8335C24.252 3.6973 24.3749 3.58495 24.5236 3.5088C24.7345 3.4 25.012 3.4 25.5781 3.4H31.7756C32.3362 3.4 32.6174 3.4 32.8264 3.5088C32.9753 3.58541 33.0982 3.69837 33.1816 3.8352C33.3 4.029 33.3 4.2857 33.3 4.8025V13.8975C33.3 14.4143 33.3 14.671 33.1816 14.8665C33.098 15.0027 32.9751 15.1151 32.8264 15.1912C32.6174 15.3 32.3362 15.3 31.7737 15.3H25.5763C25.0138 15.3 24.7345 15.3 24.5217 15.1912C24.3735 15.1143 24.2513 15.0014 24.1684 14.8648ZM25.5763 34H31.8293C32.0531 34 32.4213 34 32.758 33.9728C33.1742 33.9388 33.8846 33.8436 34.6357 33.4577C35.3802 33.0747 35.9949 32.5098 36.4117 31.8257C36.8316 31.1372 36.9334 30.4844 36.9704 30.1019C37 29.7908 37 29.4542 37 29.2485V25.1515C37 24.9475 37 24.6075 36.9704 24.2981C36.9196 23.6933 36.7284 23.1056 36.4098 22.5743C35.993 21.8902 35.3783 21.3253 34.6339 20.9423C34.0557 20.6496 33.4161 20.4739 32.758 20.4272C32.4194 20.4 32.0531 20.4 31.8293 20.4H25.5208C25.2988 20.4 24.9288 20.4 24.5921 20.4272C24.1758 20.4612 23.4654 20.5564 22.7162 20.9423C21.9717 21.3253 21.357 21.8902 20.9401 22.5743C20.6216 23.1056 20.4304 23.6933 20.3796 24.2981C20.35 24.6092 20.35 24.9458 20.35 25.1515V29.2485C20.35 29.4542 20.35 29.7925 20.3796 30.1019C20.4166 30.4844 20.5202 31.1372 20.9401 31.8274C21.357 32.5115 21.9717 33.0764 22.7162 33.4594C23.4654 33.8453 24.1758 33.9388 24.5921 33.9728C24.9306 34 25.2969 34 25.5208 34H25.5763ZM24.1684 30.1648C24.05 29.9727 24.05 29.716 24.05 29.1975V25.2025C24.05 24.6857 24.05 24.429 24.1684 24.2335C24.252 24.0973 24.3749 23.9849 24.5236 23.9088C24.7345 23.8 25.0139 23.8 25.5781 23.8H31.7756C32.3362 23.8 32.6174 23.8 32.8264 23.9088C32.9744 23.9853 33.0984 24.0975 33.1816 24.2352C33.3 24.429 33.3 24.6857 33.3 25.2042V29.1992C33.3 29.7143 33.3 29.9727 33.1816 30.1648C33.0982 30.3016 32.9753 30.4146 32.8264 30.4912C32.6174 30.6 32.3362 30.6 31.7737 30.6H25.5763C25.0138 30.6 24.7345 30.6 24.5217 30.4912C24.3735 30.4143 24.2513 30.3014 24.1684 30.1648Z"
            fill="#464646"
          />
          <defs>
            <linearGradient
              id="gradient"
              x1="16.5986"
              y1="-188.744"
              x2="54.4674"
              y2="-186.395"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4E43FA" />
              <stop offset="1" stopColor="#9F62CA" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      href: "/dashboard/ideas",
      name: "Explore Ideas",
      brief: "Discover new Ideas for content",
      icon: (
        <svg
          width="43"
          height="39"
          viewBox="0 0 43 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(
            pathname === "/dashboard/ideas" ? "nav-icon-active" : "nav-icon"
          )}
        >
          <path
            d="M7.42899 0.739014L5.26899 2.71593L8.48291 5.66022L10.6398 3.6833L7.42899 0.739014ZM35.6179 0.739014L32.404 3.6833L34.5625 5.66022L37.7748 2.71734L35.6179 0.739014ZM21.5227 1.61639C21.0164 1.62014 20.5051 1.65014 19.9886 1.70638H19.9426C13.7203 2.3602 8.76825 6.96785 7.90763 12.6455C7.22035 17.2152 9.27604 21.3589 12.7017 24.0276C14.1027 25.1238 15.0505 26.6278 15.3863 28.2879V36.7243H18.884C19.4179 37.5637 20.3921 38.1303 21.5227 38.1303C22.6533 38.1303 23.6275 37.5637 24.1613 36.7243H27.659V31.1H27.8032V29.4296C27.8032 27.3683 28.9722 25.2902 30.8714 23.6746C33.4119 21.3434 35.3295 18.0321 35.3295 14.2287C35.3295 7.28281 29.0919 1.55172 21.5227 1.61639ZM21.5227 4.42851C27.4519 4.35258 32.2613 8.80135 32.2613 14.2287C32.2613 17.173 30.7733 19.7658 28.713 21.6527L28.7621 21.6977C26.7155 23.4287 25.3917 25.7598 25.0189 28.2893H18.3088C17.9713 25.8793 16.8437 23.5467 14.7129 21.8735C12.0021 19.7644 10.3867 16.5867 10.9267 12.9984C11.5971 8.56935 15.5183 5.00781 20.323 4.5199C20.7197 4.46948 21.1192 4.43944 21.5196 4.42992L21.5227 4.42851ZM0.0454102 14.2287V17.0409H4.64768V14.2287H0.0454102ZM38.3977 14.2287V17.0409H43V14.2287H38.3977ZM8.48291 25.6094L5.27052 28.5522L7.42899 30.5306L10.6383 27.5863L8.48291 25.6094ZM34.5625 25.6094L32.4055 27.5863L35.6164 30.5306L37.7748 28.5522L34.5625 25.6094ZM18.4545 31.1014H24.5909V33.9135H18.4545V31.1014Z"
            fill="#464646"
          />
          <defs>
            <linearGradient
              id="gradient"
              x1="16.5986"
              y1="-188.744"
              x2="54.4674"
              y2="-186.395"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4E43FA" />
              <stop offset="1" stopColor="#9F62CA" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      href: "/dashboard/video-editor",
      name: "Video Editor",
      brief: "Edit your videos seamlessly",
      icon: (
        <svg
          width="41"
          height="30"
          viewBox="0 0 41 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(
            pathname === "/dashboard/video-editor"
              ? "nav-icon2-active"
              : "nav-icon2"
          )}
        >
          <defs>
            <linearGradient
              id="gradient"
              x1="16.5986"
              y1="-188.744"
              x2="54.4674"
              y2="-186.395"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4E43FA" />
              <stop offset="1" stopColor="#9F62CA" />
            </linearGradient>
          </defs>
          <path
            d="M1.75 2.75C1.75 2.28587 1.94754 1.84075 2.29917 1.51256C2.65081 1.18437 3.12772 1 3.625 1H37.375C37.8723 1 38.3492 1.18437 38.7008 1.51256C39.0525 1.84075 39.25 2.28587 39.25 2.75V27.25C39.25 27.7141 39.0525 28.1592 38.7008 28.4874C38.3492 28.8156 37.8723 29 37.375 29H3.625C3.12772 29 2.65081 28.8156 2.29917 28.4874C1.94754 28.1592 1.75 27.7141 1.75 27.25V2.75Z"
            stroke="#464646"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M31.75 1V29M9.25 1V29M33.625 9.75H39.25M33.625 20.25H39.25M1.75 9.75H7.375M1.75 8V11.5M6.4375 1H12.0625M6.4375 29H12.0625M28.9375 1H34.5625M28.9375 29H34.5625M1.75 20.25H7.375M1.75 18.5V22M39.25 18.5V22M39.25 8V11.5"
            stroke="#464646"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.6875 10.625L25.1875 15L17.6875 19.375V10.625Z"
            stroke="#464646"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      href: "/dashboard/publish",
      name: "Publish",
      brief: "Share Your Content to the World",
      icon: (
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(
            pathname === "/dashboard/publish" ? "nav-icon-active" : "nav-icon"
          )}
        >
          <path
            d="M14.4584 32.8334V16.1938L9.15008 21.5022L6.29175 18.5417L16.5001 8.33342L26.7084 18.5417L23.8501 21.5022L18.5417 16.1938V32.8334H14.4584ZM0.166748 10.3751V4.25008C0.166748 3.12716 0.566914 2.16622 1.36725 1.36725C2.16758 0.568275 3.12853 0.168109 4.25008 0.166748H28.7501C29.873 0.166748 30.8346 0.566914 31.635 1.36725C32.4353 2.16758 32.8348 3.12853 32.8334 4.25008V10.3751H28.7501V4.25008H4.25008V10.3751H0.166748Z"
            fill="#464646"
          />
          <defs>
            <linearGradient
              id="gradient"
              x1="16.5986"
              y1="-188.744"
              x2="54.4674"
              y2="-186.395"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4E43FA" />
              <stop offset="1" stopColor="#9F62CA" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      href: "/dashboard/myvideos",
      name: "My Videos",
      brief: "Manage Your Video Library",
      icon: (
        <svg
          width="39"
          height="36"
          viewBox="0 0 39 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(
            pathname === "/dashboard/myvideos" ? "nav-icon-active" : "nav-icon"
          )}
        >
          <defs>
            <clipPath id="clip0_85_397">
              <rect width="39" height="36" fill="white" />
            </clipPath>
            <linearGradient
              id="gradient"
              x1="16.5986"
              y1="-188.744"
              x2="54.4674"
              y2="-186.395"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4E43FA" />
              <stop offset="1" stopColor="#9F62CA" />
            </linearGradient>
          </defs>
          <g clipPath="url(#clip0_85_397)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.0625 19.125C17.0628 18.2296 17.4485 17.371 18.1346 16.738C18.4744 16.4247 18.8776 16.1761 19.3214 16.0066C19.7652 15.837 20.2409 15.7499 20.7212 15.75C21.2015 15.7501 21.6771 15.8376 22.1207 16.0074C22.5644 16.1772 22.9675 16.426 23.3071 16.7396C23.6466 17.0532 23.9158 17.4255 24.0995 17.8352C24.2832 18.2448 24.3776 18.6839 24.3774 19.1273C24.3771 20.0227 23.9915 20.8813 23.3053 21.5142C22.6192 22.1471 21.6888 22.5025 20.7188 22.5023C19.7487 22.502 18.8186 22.146 18.1329 21.5126C17.4472 20.8793 17.0622 20.0204 17.0625 19.125ZM20.7188 18C20.3955 18 20.0855 18.1185 19.857 18.3295C19.6284 18.5405 19.5 18.8266 19.5 19.125C19.5 19.4234 19.6284 19.7095 19.857 19.9205C20.0855 20.1315 20.3955 20.25 20.7188 20.25C21.042 20.25 21.352 20.1315 21.5805 19.9205C21.8091 19.7095 21.9375 19.4234 21.9375 19.125C21.9375 18.8266 21.8091 18.5405 21.5805 18.3295C21.352 18.1185 21.042 18 20.7188 18Z"
              fill="#464646"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.1875 30.375V22.5H6.09375C4.47759 22.5 2.92762 21.9074 1.78482 20.8525C0.642018 19.7976 0 18.3668 0 16.875L0 5.625C0 4.13316 0.642018 2.70242 1.78482 1.64752C2.92762 0.592632 4.47759 0 6.09375 0L23.1562 0C23.9565 0 24.7489 0.145495 25.4882 0.428178C26.2276 0.71086 26.8993 1.12519 27.4652 1.64752C28.031 2.16985 28.4799 2.78995 28.7861 3.47241C29.0924 4.15486 29.25 4.88631 29.25 5.625V11.25H32.9062C34.5224 11.25 36.0724 11.8426 37.2152 12.8975C38.358 13.9524 39 15.3832 39 16.875V30.375C39 31.8668 38.358 33.2976 37.2152 34.3525C36.0724 35.4074 34.5224 36 32.9062 36H18.2812C16.6651 36 15.1151 35.4074 13.9723 34.3525C12.8295 33.2976 12.1875 31.8668 12.1875 30.375ZM2.4375 5.625C2.4375 4.72989 2.82271 3.87145 3.50839 3.23851C4.19407 2.60558 5.12405 2.25 6.09375 2.25H7.3125V6.75H2.4375V5.625ZM2.4375 9H7.3125V13.5H2.4375V9ZM2.4375 15.75H7.3125V20.25H6.09375C5.12405 20.25 4.19407 19.8944 3.50839 19.2615C2.82271 18.6286 2.4375 17.7701 2.4375 16.875V15.75ZM9.75 20.25V2.25H19.5V11.25H18.2812C16.6651 11.25 15.1151 11.8426 13.9723 12.8975C12.8295 13.9524 12.1875 15.3832 12.1875 16.875V20.25H9.75ZM26.8125 11.25V9H21.9375V11.25H26.8125ZM26.8125 5.625V6.75H21.9375V2.25H23.1562C24.1259 2.25 25.0559 2.60558 25.7416 3.23851C26.4273 3.87145 26.8125 4.72989 26.8125 5.625ZM18.2812 13.5C17.3116 13.5 16.3816 13.8556 15.6959 14.4885C15.0102 15.1214 14.625 15.9799 14.625 16.875V30.375C14.625 31.4753 15.1954 32.4517 16.0778 33.075L29.6059 20.5875C29.8344 20.3766 30.1444 20.2581 30.4675 20.2581C30.7907 20.2581 31.1006 20.3766 31.3292 20.5875L36.5698 25.425V16.8975C36.5698 16.0024 36.1846 15.1439 35.4989 14.511C34.8132 13.8781 33.8833 13.5225 32.9136 13.5225H18.2886L18.2812 13.5ZM36.5625 28.5975L30.4688 22.9725L18.7931 33.75H32.9062C33.8759 33.75 34.8059 33.3944 35.4916 32.7615C36.1773 32.1286 36.5625 31.2701 36.5625 30.375V28.5907V28.5975Z"
              fill="#464646"
            />
          </g>
        </svg>
      ),
    },
    {
      href: "/dashboard/calender",
      name: "Calendar",
      brief: "Plan and Schedule Your Content",
      icon: (
        <svg
          width="35"
          height="32"
          viewBox="0 0 35 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(
            pathname === "/dashboard/calender" ? "nav-icon-active" : "nav-icon"
          )}
        >
          <path
            d="M29.4584 3.33341H26.0417V1.75008C26.0417 1.33016 25.8618 0.927428 25.5414 0.630496C25.221 0.333563 24.7865 0.166748 24.3334 0.166748C23.8803 0.166748 23.4458 0.333563 23.1254 0.630496C22.8051 0.927428 22.6251 1.33016 22.6251 1.75008V3.33341H12.3751V1.75008C12.3751 1.33016 12.1951 0.927428 11.8747 0.630496C11.5543 0.333563 11.1198 0.166748 10.6667 0.166748C10.2137 0.166748 9.77915 0.333563 9.45877 0.630496C9.1384 0.927428 8.95841 1.33016 8.95841 1.75008V3.33341H5.54175C4.18251 3.33341 2.87895 3.83386 1.91783 4.72466C0.956702 5.61546 0.416748 6.82364 0.416748 8.08341V27.0834C0.416748 28.3432 0.956702 29.5514 1.91783 30.4422C2.87895 31.333 4.18251 31.8334 5.54175 31.8334H29.4584C30.8176 31.8334 32.1212 31.333 33.0823 30.4422C34.0435 29.5514 34.5834 28.3432 34.5834 27.0834V8.08341C34.5834 6.82364 34.0435 5.61546 33.0823 4.72466C32.1212 3.83386 30.8176 3.33341 29.4584 3.33341ZM31.1667 27.0834C31.1667 27.5033 30.9868 27.9061 30.6664 28.203C30.346 28.4999 29.9115 28.6667 29.4584 28.6667H5.54175C5.08867 28.6667 4.65415 28.4999 4.33377 28.203C4.0134 27.9061 3.83341 27.5033 3.83341 27.0834V16.0001H31.1667V27.0834ZM31.1667 12.8334H3.83341V8.08341C3.83341 7.66349 4.0134 7.26076 4.33377 6.96383C4.65415 6.6669 5.08867 6.50008 5.54175 6.50008H8.95841V8.08341C8.95841 8.50334 9.1384 8.90607 9.45877 9.203C9.77915 9.49993 10.2137 9.66675 10.6667 9.66675C11.1198 9.66675 11.5543 9.49993 11.8747 9.203C12.1951 8.90607 12.3751 8.50334 12.3751 8.08341V6.50008H22.6251V8.08341C22.6251 8.50334 22.8051 8.90607 23.1254 9.203C23.4458 9.49993 23.8803 9.66675 24.3334 9.66675C24.7865 9.66675 25.221 9.49993 25.5414 9.203C25.8618 8.90607 26.0417 8.50334 26.0417 8.08341V6.50008H29.4584C29.9115 6.50008 30.346 6.6669 30.6664 6.96383C30.9868 7.26076 31.1667 7.66349 31.1667 8.08341V12.8334Z"
            fill="#464646"
          />
          <defs>
            <linearGradient
              id="gradient"
              x1="16.5986"
              y1="-188.744"
              x2="54.4674"
              y2="-186.395"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4E43FA" />
              <stop offset="1" stopColor="#9F62CA" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];
};

export default useNavLinks;
