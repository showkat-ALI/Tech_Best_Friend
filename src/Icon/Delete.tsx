import Icon from "./icons";
import { IconPropsT } from "./types";

function Delete(props: IconPropsT) {
  const { title = "Download", size, ...otherProps } = props;
  return (
    <Icon viewBox="0 0 41 41" size={size} title={title} {...otherProps}>
      <path
        opacity="0.4"
        d="M33.557 16.2094C33.557 16.3256 32.6465 27.841 32.1265 32.6874C31.8008 35.6615 29.8835 37.4654 27.0076 37.5167C24.7979 37.5662 22.6347 37.5833 20.5064 37.5833C18.2468 37.5833 16.0371 37.5662 13.8921 37.5167C11.1126 37.4501 9.19359 35.6103 8.88456 32.6874C8.34957 27.8239 7.45572 16.3256 7.4391 16.2094C7.42249 15.8592 7.53546 15.5261 7.76474 15.2562C7.9907 15.0068 8.31634 14.8564 8.6586 14.8564H32.3541C32.6947 14.8564 33.0037 15.0068 33.248 15.2562C33.4756 15.5261 33.5902 15.8592 33.557 16.2094Z"
        fill="#C03221"
      />
      <path
        d="M35.875 10.2103C35.875 9.50821 35.3217 8.95814 34.6572 8.95814H29.6762C28.6627 8.95814 27.7821 8.23725 27.5562 7.22083L27.277 5.9755C26.8866 4.47051 25.5392 3.4165 24.0272 3.4165H16.9744C15.4459 3.4165 14.1117 4.47051 13.7064 6.05749L13.4455 7.22254C13.2179 8.23725 12.3373 8.95814 11.3255 8.95814H6.3445C5.67826 8.95814 5.125 9.50821 5.125 10.2103V10.8595C5.125 11.5445 5.67826 12.1116 6.3445 12.1116H34.6572C35.3217 12.1116 35.875 11.5445 35.875 10.8595V10.2103Z"
        fill="#C03221"
      />
    </Icon>
  );
}

export default Delete;
{
  /* <svg width="32" height="32"  fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="32" height="32" rx="16" fill="#3A57E8"/>

</svg> */
}
