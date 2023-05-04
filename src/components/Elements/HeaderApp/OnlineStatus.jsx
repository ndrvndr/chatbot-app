import OnlineStatusIcon from "../../../assets/ic_online.svg";

const OnlineStatus = () => {
  return (
    <div className="flex mt-1">
      <img src={OnlineStatusIcon} alt="Online Status Icon" />
      <span className="text-sm ml-1">Terhubung</span>
    </div>
  );
};

export default OnlineStatus;
