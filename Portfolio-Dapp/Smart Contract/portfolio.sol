// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Portfolio{
    struct Project{
        uint id;
        string name;
        string description;
        string inage;
        string githubLink;
    }

    struct Education{
        uint id;
        string date;
        string degree;
        string major;
        string institute;
    }

    Project[3] public projects;
    Education[3] public qualification;

    string public imageLink = '';
    string public description = '';
    string public resumeLink = '';
    uint projectCount;
    uint educationCount;
    address public manager;

    constructor (){
        manager = msg.sender;
    }

    modifier onlyManager(){
        require(manager == msg.sender, "Your are not the admin");
        _;
    }

    function insertProject(string calldata _name, string calldata _description, string calldata _image, string calldata _githubLink) external onlyManager{
        require(projectCount < 3, "Limit exceeded");
        projects[projectCount] = Project(projectCount, _name, _description, _image, _githubLink);
        projectCount++;
    }

    function changeProject(string calldata _name, string calldata _description, string calldata _image, string calldata _githubLink, uint _projectCount) external onlyManager{
        require(projectCount >= 0 && projectCount < 3, "Invalid project ID");
        projects[projectCount] = Project(_projectCount, _name, _description, _image, _githubLink);
    }

    function allProjects() external view returns (Project[3] memory) {
        return projects;
    }

    function insertQualification(string calldata _date, string calldata _degree, string calldata _major, string calldata _institute) external onlyManager{
        require(educationCount < 3, "Limit exceeded");
        qualification[educationCount] = Education(educationCount, _date, _degree, _major, _institute);
        educationCount++;
    }

    function changeQualification(string calldata _name, string calldata _description, string calldata _image, string calldata _githubLink, uint _educationCount) external onlyManager{
        require(educationCount >= 0 && educationCount < 3, "Invalid education ID");
        qualification[educationCount] = Education(_educationCount, _name, _description, _image, _githubLink);
    }

    function allQualifications() external view returns (Education[3] memory) {
        return qualification;
    }

    function changeDescription(string calldata _description) external{
        description=_description;
    }
    function changeResumeLink(string calldata _resumeLink) external{
        resumeLink=_resumeLink;
    }
    function changeImageLink(string calldata _imageLink) external{
        imageLink=_imageLink;
    }

    function donate() public payable{
        payable(manager).transfer(msg.value);
    }
}