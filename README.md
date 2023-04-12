# Radioactive Admin Dashboard (RAD)


<!-- PROJECT LOGO -->
<br />
<div align="center" id='readme-top'>
  <a href="https://github.com/WackyChomp/rad" style='color: crimson;'>
    <font size='6'>Rad</font>
  </a>

  <h3 align="center">Full-Stack Dashboard</h3>

  <p align="center">
    <br />
    <a href="https://github.com/WackyChomp/rad"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/WackyChomp/rad/issues">Report Bug</a>
    ·
    <a href="https://github.com/WackyChomp/rad/issues">Request Feature</a>
    ·
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Screenshot :)][product-screenshot]](https://example.com)

Tired of looking through rows and columns of cells on a spreadsheet?<br>
Looking for a new scenery to spice up your workspace?<br>

With the amount of data existing today, it becomes overwhelming and tiresome sifting through repetitive noise. Now more than ever, it becomes essential to maintain and organize data to decipher hidden information in plain sight.

You can achieve this with the full-stack admin dashboard!

<br>

Purpose / Vision:
* Utilize data visualization tools to uncover hidden insights, trends, and perspectives!
* Satisfying user experience through sleek modern and responsive UI that makes you yearn for more!
* Collect incoming data through the backend with MongoDB!


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section includes a list major frameworks/libraries used in this project:

* [![JavaScript][JavaScript]][JavaScript-url]
* [![MongoDB][MongoDB]][MongoDB-url]
* [![Express][Express.js]][Express-url]
* [![React][React.js]][React-url]
* [![Node][Node.js]][Node-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites / Installation

1. Obtain free MongoDB URL cluster at [MongoDB](https://mongodb.com)
2. Clone the repo
   ```sh
   git clone https://github.com/WackyChomp/rad
   ```
3. Install NPM packages into each <u>client</u> and <u>server</u> directories
   ```sh
   npm install
   ```
4. Enter your <u>MongoDB URL Cluster</u> in `.env` (server directory)
   ```
    MONGODB_URL = ENTER YOUR URL FROM MONGODB;
   ```
5. Run locally through vscode (open and run each command in separate terminals)
   ```sh
    cd server
    npm start

    cd client
    npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Sleek client interface
- [ ] Mobile responsive
- [x] Connect to MongoDB for backend
- [ ] Add data visualization tools
- [ ] Finalize color scheme
- [ ] Deploy app on hosting service (--pending--)
- [x] Create data model to establish entity-relationship (ER) and data types
    - [ ] 
    - [ ] 

See the [open issues](https://github.com/WackyChomp/rad/issues) for a full list of proposed features or known issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Any suggestions or feedback for improvement? <br>
Go on ahead and fork the repo to create a pull request. You can also open an issue with the tag "enhancement".
Lastly, be sure to star this project if you enjoyed or found it helpful!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Helpful resources and credits to:

* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Font Awesome](https://fontawesome.com)
* [Google Fonts](https://fonts.google.com/)
<br><br>
* [Diagrams.net (previously Draw.io)](https://www.diagrams.net/)
* [Material-UI](https://mui.com/material-ui/getting-started/overview/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt


[JavaScript]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[JavaScript-url]: https://www.javascript.com/

[MongoDB]:https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/