# parallax

A zero-dependency, vanilla JavaScript library for creating parallax scrolling
effects.

## Installation

NPM:

    npm install @jarijokinen/parallax --save

Yarn:

    yarn add @jarijokinen/parallax

## Usage

    import { parallax } from '@jarijokinen/parallax';

    document.addEventListener('DOMContentLoaded', () => {
      parallax();
    });

## Configuration

    const options = {
      elements: document.querySelectorAll('.parallax'),
      speed: 0.3,
      throttleInterval: 30
    };

    parallax(options);

## License

MIT License. Copyright (c) 2022 [Jari Jokinen](https://jarijokinen.com).  See
[LICENSE](https://github.com/jarijokinen/parallax/blob/main/LICENSE.txt)
for further details.
