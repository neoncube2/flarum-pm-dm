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

- [Source code on GitHub](https://github.com/neoncube/flarum-private-messages)
- [Report an issue](https://github.com/neoncube/flarum-private-messages/issues)
- [Download via Packagist](https://packagist.org/packages/neoncube/flarum-private-messages)

# Credits

Thank you to Kyrne, who made the original [Whisper] () extension that this extension is largely based off of!

Thakn you to David Wheatleu and CSM for their many bugfixes and contributions via the fork [littlecxm/whisper](https://github.com/littlecxm/whisper)!

# License

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/neoncube/flarum-private-messages/blob/master/LICENSE)