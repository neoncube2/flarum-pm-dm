# Overview

A [Flarum](http://flarum.org) extension for adding private messages (PM's), sometimes known as "direct messages" (DM's), to your forum!

Read all the info here:

# Installation

    composer require neoncube/flarum-private-messages:"*"

# Updating

    composer update neoncube/flarum-private-messages
    php flarum migrate
    php flarum cache:clear

# Notes

This package internally uses the names "Whisper" and "littlecxm-whisper" in some places, for compability with those packages.

# Links

- [Source code on GitHub](https://github.com/neoncube2/flarum-private-messages)
- [Report an issue](https://github.com/neoncube2/flarum-private-messages/issues)
- [Download via Packagist](https://packagist.org/packages/neoncube/flarum-private-messages)

# Credits

Thank you to [Kyrne](https://redevs.org), who made the original [Whisper](https://flarum.org/index.php/extension/kyrne/whisper) extension, which this extension is mostly based off of!

Thank you to [David Wheatleu](https://davwheat.dev) and [CXM](https://github.com/littlecxm) for their many bug fixes and contributions!

# License

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/neoncube/flarum-private-messages/blob/master/LICENSE)