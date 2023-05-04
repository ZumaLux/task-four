interface UserCardProps {
  user: User;
}

export type User = {
  id: {
    name: string;
    value: string;
  };
  name: FullName;
  picture: {
    medium: string;
    large: string;
    thumbnail: string;
  };
};

type FullName = {
  first: string;
  last: string;
  title: string;
};

const getFullName = (full_info: FullName) => {
  const { first, last } = full_info;
  return (
    <>
      <div>{first}</div>
      <div>{last}</div>
    </>
  );
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div>
      <div style={styles.userCard}>
        <img src={user?.picture?.large} alt={user?.name?.first} />
        <div>{getFullName(user.name)}</div>
      </div>
    </div>
  );
};

export default UserCard;

const styles = {
  userCard: {
    border: "1px solid grey",
    width: "fit-content",
    margin: "0 auto",
    padding: "10px",
  },
};
