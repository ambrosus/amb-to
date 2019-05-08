![alt text](https://cdn-images-1.medium.com/max/1600/1*hGJHnXJuOmfjIcEofbC0Ww.png 'Ambrosus')

# AMB.TO

Tool to view Assets and Events.

## Overview

- [Introduction](#introduction)
- [Prerequisite](#prerequisite)
- [Routes](#routes)
- [License](#license)

## Introduction

Amb.to refers to the Ambrosus designed Asset Scanner used to search for and identify objects tracked and managed within the Ambrosus Ecosystem. As a preliminary design for telling the story of each Asset, Amb.to provides a foundation from which every Asset and its accompanying Events can be visualized according to location and date as well as many other additional features. As an open-source tool built by Ambrosus for use within the Ambrosus Ecosystem, entrepreneurs, enterprises, and developers are invited to utilize it for their own projects, or alternatively build on top of it so as to create even more sophisticated solutions for visualizing and managing objects on AMB-NET.

## Prerequisite

In order to make Amb.to work properly, you should provide the hermes url with google maps API key. Optionally you can also provide sentry dsn to capture the errors on sentry.
Following are the environment variables.

| Name                 | Example                                                   |
| -------------------- | --------------------------------------------------------- |
| REACT_APP_MAPS_KEY   | ...sdxs3ff                                                |
| REACT_APP_SENTRY_DSN | https://ea4cfe5fc9484509bb3sdfsd4b85e310db8@sentry.io/3423   |
| REACT_APP_HERMES_URL | https://hermes.ambrosus-dev.com/extended                  |
| REACT_APP_SENTRY_ENV | dev                                                       |

## Routes

| Route                     | Description                                                        |
| ------------------------- | ------------------------------------------------------------------ |
| /                         | Homepage where you can search for assets                           |
| /:assetId                 | Contains information regarding the searched assets with its events |
| /:assetId/events/:eventId | Specific event info                                                |

## License

MIT License

Copyright (c) 2019 Ambrosus

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
