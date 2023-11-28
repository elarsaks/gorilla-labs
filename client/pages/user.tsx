import { useSession, signIn, signOut } from "next-auth/react";

const User = () => {
  const { data: session, status } = useSession();

  // console.log(session);

  const handleSignIn = () => {
    signIn("facebook"); // You specify 'facebook' if it's the only provider, or you can omit it to use the default sign-in route
  };

  const handleSignOut = () => {
    signOut();
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {session ? (
        <div>
          {/* Check if session.user is defined */}
          {session.user && (
            <>
              <p>Welcome, {session.user.name}!</p>
              {session.user.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name || "User"}
                />
              )}
            </>
          )}
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign in with Facebook</button>
      )}
    </div>
  );
};

export default User;
