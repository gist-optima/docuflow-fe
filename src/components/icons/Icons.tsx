import { CSSProperties } from "styled-components";

interface iconsProps {
  size?: CSSProperties["width"];
  color?: CSSProperties["color"];
}

const Icons = () => {
  return <></>;
};

const Document = ({ size = 30, color }: iconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 30 30"
      fill={color}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 5.86792V23.3679C5 25.439 6.67894 27.1179 8.75 27.1179H21.25C23.3211 27.1179 25 25.439 25 23.3679V10.8679C25 8.79684 23.3211 7.11792 21.25 7.11792H6.25C5.55965 7.11792 5 6.55827 5 5.86792ZM9.0625 14.6179C9.0625 14.1001 9.48224 13.6804 10 13.6804H20C20.5177 13.6804 20.9375 14.1001 20.9375 14.6179C20.9375 15.1356 20.5177 15.5554 20 15.5554H10C9.48224 15.5554 9.0625 15.1356 9.0625 14.6179ZM9.0625 18.9929C9.0625 18.4751 9.48224 18.0554 10 18.0554H16.875C17.3927 18.0554 17.8125 18.4751 17.8125 18.9929C17.8125 19.5106 17.3927 19.9304 16.875 19.9304H10C9.48224 19.9304 9.0625 19.5106 9.0625 18.9929Z"
      />
      <path
        opacity="0.5"
        d="M22.5 5.00047V7.3313C22.109 7.19311 21.6882 7.11792 21.25 7.11792H6.25C5.55965 7.11792 5 6.55827 5 5.86792V5.77911C5 5.11284 5.48991 4.54796 6.14949 4.45374L19.6465 2.5256C21.1525 2.31044 22.5 3.4791 22.5 5.00047Z"
      />
    </svg>
  );
};

const Chart = ({ size = 30, color = "#606060" }: iconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 30 30"
      fill={color}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 25.2833V5.24167C17.5 4.34343 17.498 3.7628 17.4398 3.33498C17.385 2.93376 17.2968 2.80801 17.2254 2.7376C17.154 2.66719 17.0266 2.5801 16.62 2.52616C16.1864 2.46864 15.5979 2.46667 14.6875 2.46667C13.7771 2.46667 13.1886 2.46864 12.755 2.52616C12.3484 2.5801 12.221 2.66719 12.1496 2.7376C12.0782 2.80801 11.99 2.93376 11.9353 3.33498C11.877 3.7628 11.875 4.34343 11.875 5.24167V25.2833H17.5Z"
      />
      <path
        opacity="0.7"
        d="M10 10.7916C10 10.2808 9.58026 9.86664 9.0625 9.86664H5.3125C4.79474 9.86664 4.375 10.2808 4.375 10.7916V25.2833H10V10.7916Z"
      />
      <path
        opacity="0.7"
        d="M25 16.9583C25 16.4475 24.5802 16.0333 24.0625 16.0333H20.3125C19.7947 16.0333 19.375 16.4475 19.375 16.9583V25.2833H25V16.9583Z"
      />
      <path
        opacity="0.5"
        d="M2.1875 25.2833C1.66974 25.2833 1.25 25.6975 1.25 26.2083C1.25 26.7192 1.66974 27.1333 2.1875 27.1333H27.1875C27.7052 27.1333 28.125 26.7192 28.125 26.2083C28.125 25.6975 27.7052 25.2833 27.1875 25.2833H26.875H25H19.375H17.5H11.875H10H4.375H2.5H2.1875Z"
      />
    </svg>
  );
};

const Image = ({ size = 30, color = "#606060" }: iconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 30 30"
      fill={color}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 6.25C2.5 4.17894 4.17894 2.5 6.25 2.5H23.75C25.8211 2.5 27.5 4.17894 27.5 6.25V23.75C27.5 25.8211 25.8211 27.5 23.75 27.5H6.25C4.17894 27.5 2.5 25.8211 2.5 23.75V6.25ZM9.375 12.5C11.1009 12.5 12.5 11.1009 12.5 9.375C12.5 7.64911 11.1009 6.25 9.375 6.25C7.64911 6.25 6.25 7.64911 6.25 9.375C6.25 11.1009 7.64911 12.5 9.375 12.5ZM12.942 16.692L15.625 19.375L22.683 12.3169C23.0767 11.9232 23.75 12.2021 23.75 12.7589V23.75H6.25V22.5L12.0581 16.692C12.3021 16.4479 12.6979 16.4479 12.942 16.692Z"
      />
    </svg>
  );
};

const Kebab = ({ size = 16, color = "#D9D9D9" }: iconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 4 16"
      fill={color}
    >
      <rect width="4" height="4" rx="2" />
      <rect y="6" width="4" height="4" rx="2" />
      <rect y="12" width="4" height="4" rx="2" />
    </svg>
  );
};

const Chat = ({ size = 25, color = "#AEAEAE" }: iconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 25 25"
      fill={color}
    >
      <path
        opacity="0.5"
        d="M8.08499 21.3821L8.08489 21.3821C7.61974 21.1505 7.07052 21.0647 6.53684 21.2075C6.53683 21.2075 6.53683 21.2075 6.53682 21.2075L4.21807 21.8279C3.58306 21.9978 3.00225 21.4169 3.17212 20.7821L2.68911 20.6528L3.17212 20.7821L3.79255 18.4632C3.93534 17.9296 3.8496 17.3803 3.61787 16.9151C2.95592 15.586 2.58337 14.0873 2.58337 12.5C2.58337 7.02318 7.02321 2.58334 12.5 2.58334C17.9768 2.58334 22.4167 7.02319 22.4167 12.5C22.4167 17.9768 17.9768 22.4167 12.5 22.4167C10.9128 22.4167 9.41398 22.0442 8.08499 21.3821Z"
        fill="white"
      />
      <path d="M8.151 13.3854C7.67639 13.3854 7.29163 13.7702 7.29163 14.2448C7.29163 14.7194 7.67639 15.1042 8.151 15.1042H14.4531C14.9277 15.1042 15.3125 14.7194 15.3125 14.2448C15.3125 13.7702 14.9277 13.3854 14.4531 13.3854H8.151Z" />
      <path d="M8.151 9.375C7.67639 9.375 7.29163 9.75976 7.29163 10.2344C7.29163 10.709 7.67639 11.0937 8.151 11.0937H17.3177C17.7923 11.0937 18.177 10.709 18.177 10.2344C18.177 9.75976 17.7923 9.375 17.3177 9.375H8.151Z" />
    </svg>
  );
};

const Export = ({ size = 17, color = "#8B8B8B" }: iconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 17 17"
      fill={color}
    >
      <path d="M11.4679 1.41667H5.5321C2.95377 1.41667 1.41669 2.95375 1.41669 5.53209V11.4608C1.41669 14.0463 2.95377 15.5833 5.5321 15.5833H11.4609C14.0392 15.5833 15.5763 14.0463 15.5763 11.4679V5.53209C15.5834 2.95375 14.0463 1.41667 11.4679 1.41667ZM12.2188 8.73375C12.2188 9.02417 11.9779 9.265 11.6875 9.265C11.3971 9.265 11.1563 9.02417 11.1563 8.73375V6.59459L5.68794 12.0629C5.58169 12.1692 5.4471 12.2188 5.31252 12.2188C5.17794 12.2188 5.04335 12.1692 4.9371 12.0629C4.73169 11.8575 4.73169 11.5175 4.9371 11.3121L10.4054 5.84375H8.26627C7.97585 5.84375 7.73502 5.60292 7.73502 5.3125C7.73502 5.02209 7.97585 4.78125 8.26627 4.78125H11.6875C11.9779 4.78125 12.2188 5.02209 12.2188 5.3125V8.73375Z" />
    </svg>
  );
};

const Write = ({ size = 16, color = "white" }: iconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 16 16"
      fill={color}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.29573 0.833329H8.70427C9.92947 0.833315 10.8999 0.833309 11.6593 0.935422C12.4409 1.0405 13.0736 1.26192 13.5725 1.76082C13.7677 1.95609 13.7677 2.27267 13.5725 2.46793C13.3773 2.6632 13.0607 2.6632 12.8654 2.46793C12.5833 2.18579 12.1968 2.01668 11.5261 1.9265C10.841 1.83439 9.93787 1.83333 8.66667 1.83333H7.33333C6.06212 1.83333 5.15901 1.83439 4.4739 1.9265C3.80317 2.01668 3.41674 2.18579 3.1346 2.46793C2.85246 2.75007 2.68335 3.1365 2.59317 3.80723C2.50106 4.49233 2.5 5.39545 2.5 6.66666V9.33333C2.5 10.6045 2.50106 11.5077 2.59317 12.1928C2.68335 12.8635 2.85246 13.2499 3.1346 13.5321C3.41674 13.8142 3.80317 13.9833 4.4739 14.0735C5.15901 14.1656 6.06212 14.1667 7.33333 14.1667H8.66667C9.93787 14.1667 10.841 14.1656 11.5261 14.0735C12.1968 13.9833 12.5833 13.8142 12.8654 13.5321C13.3293 13.0681 13.4699 12.3472 13.4943 10.6595C13.4983 10.3833 13.7253 10.1627 14.0015 10.1667C14.2775 10.1707 14.4981 10.3978 14.4941 10.6739C14.4707 12.2922 14.366 13.4457 13.5725 14.2392C13.0736 14.7381 12.4409 14.9595 11.6593 15.0646C10.8999 15.1667 9.92947 15.1667 8.70427 15.1667H7.29573C6.07055 15.1667 5.10013 15.1667 4.34065 15.0646C3.55904 14.9595 2.92641 14.7381 2.42749 14.2392C1.92859 13.7403 1.70717 13.1076 1.60209 12.326C1.49998 11.5665 1.49999 10.5961 1.5 9.37093V6.62905C1.49999 5.40387 1.49998 4.43345 1.60209 3.67398C1.70717 2.89237 1.92859 2.25973 2.42749 1.76082C2.92641 1.26192 3.55904 1.0405 4.34065 0.935422C5.10013 0.833309 6.07055 0.833315 7.29573 0.833329ZM12.0754 4.69703C12.7826 3.98987 13.9291 3.98987 14.6363 4.69703C15.3435 5.40419 15.3435 6.55073 14.6363 7.25793L11.4661 10.4281C11.2936 10.6007 11.1769 10.7173 11.0462 10.8193C10.8925 10.9392 10.7261 11.042 10.5501 11.1259C10.4005 11.1972 10.2439 11.2494 10.0125 11.3265L8.6234 11.7895C8.31673 11.8917 7.9786 11.8119 7.75 11.5833C7.5214 11.3547 7.4416 11.0166 7.5438 10.7099L7.99753 9.34879C8.00067 9.33939 8.00373 9.33006 8.0068 9.32086C8.08393 9.08946 8.13613 8.93286 8.2074 8.78319C8.29133 8.60719 8.39413 8.44086 8.51407 8.28713C8.616 8.15639 8.73267 8.03973 8.9052 7.86726C8.91207 7.86039 8.919 7.85346 8.92607 7.84639L12.0754 4.69703ZM13.9292 5.40414C13.6125 5.0875 13.0992 5.0875 12.7825 5.40414L12.6613 5.52533C12.6679 5.54765 12.6755 5.57139 12.6841 5.59634C12.7468 5.77709 12.8659 6.01617 13.0915 6.24183C13.3171 6.46749 13.5562 6.58649 13.737 6.64921C13.7619 6.65786 13.7857 6.66541 13.808 6.67199L13.9292 6.55079C14.2458 6.23415 14.2458 5.72078 13.9292 5.40414ZM13.0443 7.43573C12.8323 7.32439 12.6035 7.16806 12.3844 6.94893C12.1653 6.72979 12.0089 6.50097 11.8976 6.28904L9.63313 8.55353C9.43247 8.75426 9.362 8.82586 9.30253 8.90213C9.22733 8.99859 9.1628 9.10299 9.11013 9.21346C9.06853 9.30073 9.03593 9.39573 8.9462 9.66506L8.67933 10.4657L8.86767 10.654L9.66827 10.3871C9.9376 10.2974 10.0326 10.2648 10.1199 10.2232C10.2303 10.1705 10.3347 10.106 10.4312 10.0308C10.5075 9.97133 10.5791 9.90086 10.7798 9.70019L13.0443 7.43573ZM4.83333 5.99999C4.83333 5.72385 5.05719 5.49999 5.33333 5.49999H9.66667C9.9428 5.49999 10.1667 5.72385 10.1667 5.99999C10.1667 6.27613 9.9428 6.49999 9.66667 6.49999H5.33333C5.05719 6.49999 4.83333 6.27613 4.83333 5.99999ZM4.83333 8.66666C4.83333 8.39053 5.05719 8.16666 5.33333 8.16666H7C7.27613 8.16666 7.5 8.39053 7.5 8.66666C7.5 8.94279 7.27613 9.16666 7 9.16666H5.33333C5.05719 9.16666 4.83333 8.94279 4.83333 8.66666ZM4.83333 11.3333C4.83333 11.0572 5.05719 10.8333 5.33333 10.8333H6.33333C6.60947 10.8333 6.83333 11.0572 6.83333 11.3333C6.83333 11.6095 6.60947 11.8333 6.33333 11.8333H5.33333C5.05719 11.8333 4.83333 11.6095 4.83333 11.3333Z"
      />
    </svg>
  );
};

const Branch = ({ size = 15, color = "#6A6A6A" }: iconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 15 15"
      fill={color}
    >
      <g clipPath="url(#clip0_1_29)">
        <path d="M13.75 2.8125C13.7505 2.4067 13.6381 2.00877 13.4253 1.6632C13.2126 1.31762 12.9079 1.03804 12.5454 0.8557C12.1829 0.673362 11.7768 0.595459 11.3725 0.630703C10.9683 0.665947 10.5818 0.812948 10.2563 1.05527C9.93075 1.29759 9.67906 1.62568 9.52934 2.00285C9.37962 2.38002 9.33776 2.7914 9.40845 3.191C9.47914 3.59059 9.65959 3.96265 9.92962 4.26556C10.1997 4.56848 10.5486 4.79031 10.9375 4.90625V5C10.9375 5.49728 10.74 5.9742 10.3883 6.32583C10.0367 6.67746 9.55979 6.875 9.06251 6.875H6.56251C5.88743 6.88154 5.23149 7.10019 4.68751 7.5V4.90625C5.19104 4.75612 5.62372 4.42977 5.90642 3.98685C6.18912 3.54394 6.30295 3.01407 6.22709 2.49413C6.15123 1.97419 5.89076 1.49893 5.4933 1.15525C5.09584 0.811569 4.58795 0.622437 4.06251 0.622437C3.53706 0.622437 3.02917 0.811569 2.63171 1.15525C2.23425 1.49893 1.97378 1.97419 1.89792 2.49413C1.82206 3.01407 1.93589 3.54394 2.21859 3.98685C2.50129 4.42977 2.93397 4.75612 3.43751 4.90625V10.0938C2.93397 10.2439 2.50129 10.5702 2.21859 11.0131C1.93589 11.4561 1.82206 11.9859 1.89792 12.5059C1.97378 13.0258 2.23425 13.5011 2.63171 13.8448C3.02917 14.1884 3.53706 14.3776 4.06251 14.3776C4.58795 14.3776 5.09584 14.1884 5.4933 13.8448C5.89076 13.5011 6.15123 13.0258 6.22709 12.5059C6.30295 11.9859 6.18912 11.4561 5.90642 11.0131C5.62372 10.5702 5.19104 10.2439 4.68751 10.0938V10C4.68751 9.50272 4.88505 9.02581 5.23668 8.67418C5.58831 8.32254 6.06522 8.125 6.56251 8.125H9.06251C9.89131 8.125 10.6862 7.79576 11.2722 7.20971C11.8583 6.62366 12.1875 5.8288 12.1875 5V4.90625C12.6385 4.77178 13.0342 4.49543 13.3156 4.11825C13.5971 3.74106 13.7495 3.28314 13.75 2.8125ZM3.12501 2.8125C3.12501 2.56386 3.22378 2.3254 3.39959 2.14959C3.57541 1.97377 3.81386 1.875 4.06251 1.875C4.31115 1.875 4.5496 1.97377 4.72542 2.14959C4.90123 2.3254 5.00001 2.56386 5.00001 2.8125C5.00001 3.06114 4.90123 3.2996 4.72542 3.47541C4.5496 3.65123 4.31115 3.75 4.06251 3.75C3.81386 3.75 3.57541 3.65123 3.39959 3.47541C3.22378 3.2996 3.12501 3.06114 3.12501 2.8125ZM5.00001 12.1875C5.00001 12.3729 4.94502 12.5542 4.84201 12.7083C4.73899 12.8625 4.59258 12.9827 4.42127 13.0536C4.24996 13.1246 4.06147 13.1432 3.87961 13.107C3.69775 13.0708 3.5307 12.9815 3.39959 12.8504C3.26848 12.7193 3.17919 12.5523 3.14302 12.3704C3.10685 12.1885 3.12541 12 3.19637 11.8287C3.26733 11.6574 3.38749 11.511 3.54166 11.408C3.69583 11.305 3.87709 11.25 4.06251 11.25C4.1868 11.2456 4.31065 11.2669 4.42637 11.3125C4.54209 11.358 4.64719 11.4269 4.73513 11.5149C4.82307 11.6028 4.89197 11.7079 4.93754 11.8236C4.98311 11.9394 5.00437 12.0632 5.00001 12.1875ZM11.5625 3.75C11.4382 3.75437 11.3144 3.7331 11.1986 3.68753C11.0829 3.64196 10.9778 3.57307 10.8899 3.48512C10.8019 3.39718 10.733 3.29208 10.6875 3.17637C10.6419 3.06065 10.6206 2.93679 10.625 2.8125C10.625 2.56386 10.7238 2.3254 10.8996 2.14959C11.0754 1.97377 11.3139 1.875 11.5625 1.875C11.8111 1.875 12.0496 1.97377 12.2254 2.14959C12.4012 2.3254 12.5 2.56386 12.5 2.8125C12.5044 2.93679 12.4831 3.06065 12.4375 3.17637C12.392 3.29208 12.3231 3.39718 12.2351 3.48512C12.1472 3.57307 12.0421 3.64196 11.9264 3.68753C11.8107 3.7331 11.6868 3.75437 11.5625 3.75Z" />
      </g>
      <defs>
        <clipPath id="clip0_1_29">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Triangle = ({ size = 8, color = "#A0A0A0" }: iconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 8 7"
      fill={color}
    >
      <path d="M4 6.1584L0 -2.38419e-06L8 -2.38419e-06L4 6.1584Z" />
    </svg>
  );
};

const Send = ({ size = 16, color = "white" }: iconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 16 16"
      fill={color}
    >
      <g clipPath="url(#clip0_1_296)">
        <path
          d="M11.3334 8H6.66675M6.66675 8L8.66675 10M6.66675 8L8.66675 6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.66675 10.6667V7.99999V5.33333"
          stroke={color}
          strokeLinecap="round"
        />
        <path
          opacity="0.5"
          d="M1.33325 7.99999C1.33325 4.85729 1.33325 3.28595 2.30957 2.30964C3.28587 1.33333 4.85722 1.33333 7.99992 1.33333C11.1426 1.33333 12.714 1.33333 13.6903 2.30964C14.6666 3.28595 14.6666 4.85729 14.6666 7.99999C14.6666 11.1427 14.6666 12.7141 13.6903 13.6903C12.714 14.6667 11.1426 14.6667 7.99992 14.6667C4.85722 14.6667 3.28587 14.6667 2.30957 13.6903C1.33325 12.7141 1.33325 11.1427 1.33325 7.99999Z"
          stroke={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_296">
          <rect width="16" height="16" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

const DownArrow = ({ size = 20, color = "#5F5F5F" }: iconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 20 20"
      fill={color}
    >
      <path d="M15.3001 12.0269L9.99697 17.33L4.69385 12.0269L6.4626 10.2594L8.7501 12.5444V3.75H11.2501V12.5444L13.5338 10.2587L15.3001 12.0269Z" />
    </svg>
  );
};

Icons.Document = Document;
Icons.Chart = Chart;
Icons.Image = Image;
Icons.Kebab = Kebab;
Icons.Chat = Chat;
Icons.Export = Export;
Icons.Write = Write;
Icons.Branch = Branch;
Icons.Triangle = Triangle;
Icons.Send = Send;
Icons.DownArrow = DownArrow;

export default Icons;
