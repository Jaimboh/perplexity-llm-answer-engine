// 1. Interface defining the props for UserMessageComponent, expecting a 'message' of type string.
interface UserMessageComponentProps {
    message: string;
}

// 2. UserMessageComponent functional component that renders a message within styled div elements.
const UserMessageComponent: React.FC<UserMessageComponentProps> = ({ message }) => {
    return (
        <div className="dark:bg-slate-800 bg-white shadow-lg rounded-lg p-4 mt-4">
            <div className="flex items-center">
                {/* 3. Render Message component*/}
                <h2 className="text-lg font-semibold flex-grow dark:text-white text-black">{message}</h2>
                {/* 4. Render Icons */}
                <span className='h-6 mx-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 77 39" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                        <path d="M58.9837 10.5483C57.9651 10.5483 57.0112 10.9424 56.2919 11.657L53.399 14.5423C52.6171 15.3215 52.2172 16.4012 52.2999 17.5077C52.3066 17.5678 52.3111 17.6301 52.3178 17.6903C52.4228 18.5407 52.7958 19.3065 53.399 19.9076C53.8167 20.3239 54.3305 20.6401 54.8867 20.8226C54.9158 20.9896 54.9314 21.161 54.9314 21.3302C54.9314 22.0938 54.6343 22.8107 54.0937 23.3495L53.915 23.5276C52.9477 23.1981 52.0899 22.6638 51.3594 21.938C50.3922 20.974 49.7533 19.7585 49.512 18.4227L49.4785 18.2357L49.3311 18.3559C49.2328 18.4361 49.1367 18.5229 49.0496 18.6097L46.1545 21.495C44.6712 22.9732 44.6712 25.3798 46.1545 26.8603C46.8961 27.5994 47.8723 27.969 48.8463 27.969C49.8203 27.969 50.7965 27.5994 51.5381 26.8603L54.4333 23.975C55.9166 22.4968 55.9166 20.0902 54.4333 18.6119C54.0379 18.2179 53.5665 17.9218 53.0326 17.7303C53.0036 17.5567 52.9879 17.383 52.9879 17.2138C52.9879 16.3834 53.3186 15.5953 53.9195 14.9942C54.889 15.3237 55.7468 15.858 56.4728 16.5816C57.4379 17.5433 58.0767 18.7589 58.3202 20.0969L58.3538 20.2839L58.5012 20.1637C58.5995 20.0835 58.6955 19.9967 58.7849 19.9076L61.68 17.0246C63.1633 15.5463 63.1633 13.1397 61.68 11.6593C60.9629 10.9446 60.0068 10.5506 58.9882 10.5506L58.9837 10.5483Z" fill="currentColor"></path>
                        <path d="M57.4333 0H19.5667C8.77696 0 0 8.74706 0 19.5C0 30.2529 8.77696 39 19.5667 39H57.4333C68.223 39 77 30.2529 77 19.5C77 8.74706 68.223 0 57.4333 0ZM38.7558 30.5735C38.1303 30.7027 37.4288 30.7271 36.953 30.2285C36.7766 30.6314 36.3677 30.4199 36.0483 30.3665C36.0193 30.4489 35.9947 30.5201 35.9656 30.6025C34.9113 30.6737 34.1205 29.6006 33.6178 28.7903C32.6193 28.2537 31.4867 27.9243 30.468 27.361C30.4077 28.2894 30.6132 29.4381 29.7264 30.0392C29.6817 31.8225 32.4361 30.2485 32.6863 31.5798C32.4897 31.5998 32.273 31.5486 32.1167 31.7C31.3996 32.3969 30.573 31.1746 29.7465 31.6778C28.6363 32.2366 28.5223 32.6907 27.1485 32.8065C27.0725 32.6929 27.1038 32.615 27.1686 32.546C27.555 32.0985 27.5819 31.5687 28.2453 31.3772C27.564 31.2704 26.9943 31.6444 26.4225 31.9427C25.6763 32.2455 25.683 31.257 24.5348 31.9939C24.4075 31.8915 24.4678 31.798 24.5415 31.7178C24.8342 31.3639 25.2162 31.3104 25.6495 31.3305C23.5229 30.1483 22.5221 32.7753 21.5392 31.4707C21.2443 31.5486 21.1326 31.8136 20.9472 32.0028C20.7864 31.8269 20.9092 31.6154 20.9159 31.4084C20.7238 31.3193 20.4803 31.2748 20.5384 30.9698C20.1609 30.8429 19.9017 31.0655 19.6225 31.277C19.3701 31.0833 19.7923 30.7962 19.8705 30.5936C20.0961 30.2017 20.6076 30.5134 20.869 30.2329C21.6084 29.8144 22.6405 30.4956 23.4849 30.3798C24.1372 30.4622 24.9436 29.7943 24.6152 29.1309C23.9183 28.2448 24.0434 27.0849 24.0277 26.023C23.9406 25.4063 22.4528 24.6182 22.0217 23.9503C21.49 23.3492 21.0745 22.6546 20.6613 21.9689C19.1646 19.0815 19.6359 15.3702 17.7505 12.6876C16.8972 13.1573 15.7869 12.9347 15.0497 12.3047C14.6521 12.6653 14.6342 13.1373 14.6029 13.6382C13.6513 12.6898 13.7697 10.8954 14.5315 9.83794C14.842 9.4194 15.2128 9.07655 15.6305 8.776C15.7244 8.70921 15.7556 8.6402 15.7534 8.53556C16.5062 5.15829 21.6442 5.8106 23.2704 8.20162C24.4499 9.67319 24.8051 11.6212 26.141 12.9904C27.9393 14.9517 29.9878 16.6793 31.6475 18.7698C33.2157 20.6799 34.3394 22.9173 35.3156 25.1748C35.7155 25.9228 35.7177 26.8423 36.3097 27.4812C36.6023 27.8664 38.0253 28.9172 37.717 29.289C37.8957 29.6741 39.2249 30.2084 38.7647 30.5824L38.7558 30.5735ZM63.7128 19.0525L60.8199 21.9378C60.0492 22.7058 59.0954 23.2802 58.0633 23.5941L58.0119 23.6097L57.9918 23.6609C57.6545 24.547 57.1452 25.3351 56.4728 26.0052L53.5776 28.8905C52.3155 30.1483 50.6356 30.8407 48.8485 30.8407C47.0614 30.8407 45.3815 30.1483 44.1194 28.8927C41.5124 26.2946 41.5124 22.0647 44.1194 19.4666L47.0145 16.5813C47.7896 15.8088 48.7167 15.2545 49.7666 14.9317L49.818 14.9161L49.8381 14.8649C50.1732 13.9788 50.687 13.1885 51.3639 12.5139L54.2568 9.62867C55.5189 8.37082 57.1988 7.67845 58.9859 7.67845C60.773 7.67845 62.4551 8.37082 63.715 9.62867C64.975 10.8865 65.6719 12.5607 65.6697 14.3417C65.6697 16.125 64.975 17.7991 63.7128 19.0547V19.0525Z" fill="currentColor"></path>
                        <path d="M26.9839 27.0806C26.7292 28.0668 26.6465 29.7477 25.3598 29.7966C25.2548 30.3666 25.7552 30.5803 26.2132 30.3977C26.6644 30.1907 26.8789 30.5602 27.033 30.9298C27.73 31.0322 28.7643 30.6983 28.8045 29.8723C27.7612 29.2735 27.4396 28.1336 26.9861 27.0806H26.9839Z" fill="currentColor"></path>
                    </svg>
                </span>
                <span className="h-6 mx-1">
                    <svg fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>OpenAI icon</title><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" /></svg>

                </span>
                <span className='h-6 mx-1'>
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 76 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor" />
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default UserMessageComponent;