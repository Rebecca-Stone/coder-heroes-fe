import React from 'react';
import '../../../styles/registration.less';

export default function ParentWelcome() {
  return (
    <div className="reg-content-container">
      <div className="content">
        <p className="color-one">Welcome to CoderHeroes!</p>
        <p className="color-two">
          You are steps away from unleashing your superpowers
        </p>
        <a href="#">CREATE PROFILES</a>
      </div>
    </div>
  );
}
