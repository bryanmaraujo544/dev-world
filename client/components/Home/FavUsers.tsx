import { MotionFlex } from '../../utils/getMotionComponents';

type FavUsers = {
  user_id: number;
  user_username: string;
  favuser_id: number;
  favuser_username: string;
};

type PropTypes = {
  favUsers: Array<FavUsers>;
};

export const FavUsers = ({ favUsers }: PropTypes) => {
  console.log('<FavUsers/>', favUsers);
  return (
    <MotionFlex>
      {favUsers.map((favUser) => (
        <MotionFlex>{favUser.favuser_username}</MotionFlex>
      ))}
    </MotionFlex>
  );
};
