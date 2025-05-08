import React, { useEffect, useState } from "react";
import styles from "../css/props.module.css";

// UserCard 컴포넌트를 완성하세요
function UserCard({ name, age, likes, onLike }) {
  return (
    /*************** EDIT START ***************/
    <div className={styles.userCard}>
      <h2>{name}</h2> {/* name */}
      <p>{age}</p> {/* age */}
      <p>{likes}</p> {/* likes */}
      <button className={styles.button} onClick={onLike}>Like</button>
      {/* button */}
    </div>
  );
  /*************** EDIT END ***************/
}

function PropsPractice(props) {
  /*************** EDIT START ***************/
  const [AliceLikes, setAliceLikes] = useState(0); // Alice와 Bob의 likes를 위한 state를 선언하세요
  const [BobLikes, setBobLikes] = useState(0);
  // Alice의 좋아요를 2씩 증가시키는 함수
  const increaseAlice = () => setAliceLikes((prev) => prev + 2);
  // Bob의 좋아요를 1씩 증가시키는 함수
  const increaseBob = () => setBobLikes((prev) => prev + 1);
  // useEffect를 사용하여  Bob과 Alice의 좋아요 수가 10이 넘고 동시에 같다면 alert을 띄우세요
  useEffect(() => {
    if (AliceLikes > 10 && BobLikes > 10 && AliceLikes == BobLikes) {
      alert("Alice and Bob are friends");
    }
  }, [AliceLikes, BobLikes]);
  /*************** EDIT END ***************/
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {/*************** EDIT START ***************/}
      <UserCard
        name="Alice"
        age={25}
        likes={AliceLikes}
        onLike={increaseAlice}
      />
      <UserCard name="Bob" age={25} likes={BobLikes} onLike={increaseBob} />
      {/* 각각 UserCard에 맞는 props를 전달하세요 */}
      {/*************** EDIT END ***************/}
    </div>
  );
}

export default PropsPractice;
