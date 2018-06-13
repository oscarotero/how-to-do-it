# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## [UNRELEASED]

### Added

- Imagemagick commands
- A way to include node and php packages in PATH

## [1.1.0] - 2017-08-31

### Added

- Command to know the IP address
- Allow to pass values to fill placeholders in the commands. For example, with `how-to remove local branches` you get the command `git fetch <remote> --prune` but `how-to remove local branches --remote=origin`, you get `git fetch origin --prune`.

### Fixed

- Fix placeholders format that contain dots. For example `<.git-directory>`

## [1.0.3] - 2017-08-23

### Added

- Some git commands
- Added links with more info in some commands

### Fixed

- Improved the command to go to an old commit in git

## [1.0.2] - 2017-08-19

### Added

- Download mysql databases using ssh

### Fixed

- Improved the script to clone mysql databases using ssh

## [1.0.1] - 2017-08-14

### Added

- More commands

### Fixed

- Improved info display allowing multiline.
- Allow to add the `-i` option in any place (not necessary at the end).

## 1.0.0 - 2017-08-12

First version


[UNRELEASED]: https://github.com/oscarotero/how-to-do-it/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/oscarotero/how-to-do-it/compare/v1.0.3...v1.1.0
[1.0.3]: https://github.com/oscarotero/how-to-do-it/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/oscarotero/how-to-do-it/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/oscarotero/how-to-do-it/compare/v1.0.0...v1.0.1
