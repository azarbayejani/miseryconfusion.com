---
title: Don't Get Fooled By Fake Lossless Files Again
tags: blog
date: 2025-07-09
---

<img src="/blog/2025-07-09-tools-for-djs-on-macos/images/finder-and-spectrogram.png" alt="A Mac desktop screenshot shows a Finder window with an AIFF audio file selected and a right-click menu open, displaying quick actions like Get Spectrogram and Convert to MP3. To the right, a spectrogram image visualizing audio frequencies over time is open." style="height: auto; margin-top: 8px; " />

*"How did you do that?"* A friend of mine asked a few weeks ago when he saw me
right-click a file, click "Get Spectrogram" and watch an image like the one
above appear on my screen. I had just downloaded a file from Soulseek[^1] and
wanted to verify whether the purported AIFF file was actually legitimate or a
bad transcode. Once I confirmed it was genuine, I right-clicked again and
converted it to 320kbps MP3. 

I had achieved this by using a feature of macOS called "Quick Actions". [Quick
Actions](https://support.apple.com/guide/automator/use-quick-action-workflows-aut73234890a/mac),
introduced in macOS High Sierra, allow you to build your own plug-ins that can
be applied in other apps. They can be used by right-clicking files,
folders, or text, and can even have keyboard shortcuts assigned to them.
They're extremely powerful tools that allow me to do all kinds of tasks on my
computer. As a DJ and music collector, I use Quick Actions to help me convert
files and verify if the files I have are what they claim to be.

## Why audio quality matters for DJs

If you've ever heard a song sound great on your laptop speakers but terrible
when a DJ plays it out, you've probably experienced the difference audio
quality makes. Club sound systems are unforgiving. They'll expose every loss of
fidelity in a low-quality file.

MP3 is a "lossy" compression format, meaning the compression algorithm causes
actual loss of audio data. The lower the bitrate (represented in kbps) of an
MP3, the more audio data loss and the lower the sound quality. The general rule
of thumb is that music you plan to play as a DJ should at the very least be
320kbps MP3. Some DJs only play lossless music (WAV, AIFF, or FLAC), but this
does take up more storage space.

Most of the music in my Rekordbox library is 320kbps MP3. For some important
tracks, I prefer to have it in lossless AIFF. I don't put FLAC files into
Rekordbox because some older CDJ models do not support FLAC. As a result, I
often find myself converting file types, and I wanted a quick way to do so
directly from Finder.

## The problem with bad transcodes

Some files you may find on the internet may be "bad transcodes" (or just
"transcodes" for short). These are files that claim to be lossless or a
certain bitrate MP3, but are in fact not. 

The first time a file is converted to a lossy format, audio information is
**permanently** lost and can never be recovered through further conversion. Bad
transcodes can be created by converting a lossy format more than once (for
example converting a 128kbps file to 320kbps, or vice versa), or by converting
a lossy format file back to a lossless format.

In general, if I'm buying music from an online marketplace like Bandcamp or
Beatport, I can trust that a WAV or AIFF is actually lossless and a 320kbps
MP3 is actually a 320kbps MP3. However, I *never* trust the quality of a file
I download from Soulseek. You would be surprised how many times I find that a
supposedly lossless or 320kbps file from Soulseek is actually an upconverted
128kbps YouTube rip.

## What does a bad transcode look like?

Audio files can be represented visually through a graph called a spectrogram. A
spectrogram shows which frequencies are represented in an audio signal over
time. Since lossy formats generally remove audio information at higher
frequencies, we can often see the difference between a transcode and a valid
file in the spectrogram.

The image below shows two versions of the same song 
that both claim to be "320kbps". One is a genuine 320kbps MP3, and
the other is a bad transcode (a 128kbps file that was converted up to 320kbps):

<img src="/blog/2025-07-09-tools-for-djs-on-macos/images/good-vs-bad-spectrogram.png" alt="Side-by-side comparison of spectrograms showing a genuine 320kbps MP3 with frequencies extending to 20kHz versus a bad transcode with a sharp frequency cutoff around 16kHz" style="height: auto; margin-top: 8px; " />

Notice how the genuine 320kbps file has frequencies extending all the way up to
20kHz, while the bad transcode has a sharp cutoff around 16kHz. This cutoff is
a dead giveaway that the file was originally encoded at a lower bitrate. 

If you want more information on spectrograms, check out [Redacted Interview
Prep](https://web.archive.org/web/20250602150100/https://interviewfor.red/en/spectrals.html)
for a good guide.


## My workflow 

My general workflow when I download a file is to first analyze the spectrogram
to verify the file is not a bad transcode.  If the file I
downloaded is truly a lossless AIFF or FLAC, I then convert it to the desired
format. To speed up this workflow, I have created 3 Quick Actions:

1. **Get Spectrogram** - generates and shows a spectrogram image for the selected file
2. **Convert to MP3 (320)** - converts audio files to 320kbps MP3
3. **Convert to AIFF** - converts audio files to lossless AIFF

## Installation guide 

These quick actions require [`sox`](https://en.wikipedia.org/wiki/SoX) and [`ffmpeg`](https://ffmpeg.org/) to be installed on your computer before you can use them.

### Caveats:

 * Setting up these Quick Actions will require you to use the Terminal to
 install some programs. It's pretty easy, and I will walk you through it.

 * Quick Actions are a Mac-only feature, but maybe Windows and Linux distros
   have similar concepts. The scripts that these Quick Actions use could still
   be useful to you regardless of what platform you're on.

### Opening up Terminal

You can find the Terminal on the Mac by opening the Applications folder, then
going to the Utilities folder, and finally double-clicking on Terminal.

### Installing Homebrew

[Homebrew](https://brew.sh/) is a command-line package manager macOS. It allows
you to install the programs you will need to run these Quick Actions in the
Terminal.

To install Homebrew, run this command in your Terminal:

<code>
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
</code>

### Installing `ffmpeg` and `sox`

In Terminal, run this command.

<code>
brew install ffmpeg sox
</code>

### Install the Quick Actions

Quick Actions can be edited and installed in the Automator app, which is installed by default on Mac.

[You can download the Quick Actions here](https://www.dropbox.com/scl/fi/ia8hn2e4wfdy88kbqq7ch/automator-actions-for-djs.zip?rlkey=8p8qm84w060hman042p51i4fb&dl=0).
If you're not on macOS and would just like to use the scripts, you can copy
them from [this GitHub Gist](https://gist.github.com/azarbayejani/40be9d307efb83545f52decaa6945730).

Once you've unzipped `automator-actions-for-djs.zip`, you should see a folder
with 3 files, one for each Quick Action. To install, double click each of them
and click "Install" on the dialog that shows up.

🎉 Hooray! The Quick Actions should now be available to use.
Right-click any audio file in Finder to use them.

## What's next?

With these three Quick Actions installed, you'll be able to quickly verify and
convert audio files right from Finder. No more guessing whether that "lossless"
file is actually what it claims to be, and no more opening separate apps just
to convert between formats.

Quick Actions can be a powerful tool for all kinds of problems, so I encourage
you to try and find your own ways to save time by experimenting with them!

---

**Questions or issues?** Feel free to [email me](mailto:contact@miseryconfusion.com)
if you run into any problems setting these up. I'll try my best to keep this
article updated with any problems people bring up.

**Found this helpful?** Consider [buying me a coffee](https://buymeacoffee.com/miseryconfusion)
to support more DJ tools and tutorials!

[^1]:
    I make my best effort to purchase as much new music as I can, but for very
    old vinyl-only tracks, often the easiest way to get them is from Soulseek.

