import React, { Component } from "react";

// Create a file named Profile.js and add a class component that returns some JSX in the render function

class Profile extends Component {
    render(){
        const { name, image, age, interests, color, movie} = this.props.user;

        return (
            <section className="profile">
                Profile
                <header>
                    <h1> {this.props.user.name}</h1>
                </header>
                <div className = "profile-content">
                <div className = "profile-image">
                    <img src = { this.props.user.image} alt= {this.props.user.name}></img>
                </div>
                <p>
                    <strong>Age:</strong> {this.props.user.age}
                </p>
                </div>
            </section>
        )
    }
}

export default Profile;