MonStar
=======

####A NodeJS Process Monitor designed specifically from the ground up for Turntable.fm bots. If your bot crashes, this will declare it offline after 20 seconds and restart it after 40 seconds (both are programmable).

###Installation
1. Put this script in your bot directory
2. Add the code on lines 36-45 to your bot
3. Add your bot's path to the process_list array
4. RUN with "node monstar.js"
5. CTRL+C to end the task (in Windows), or just close the window.

* Note: you could run a bunch of bots from one script, but it may start to
get confusing with all of the logs in one terminal.  This process is so
lightweight that you could just put one with each bot without worrying.
Other ideas would be to color code the processes, which is pretty easy.

This software is best viewed with Sublime Text http://www.sublimetext.com

ASCII GEN http://patorjk.com/software/taag/#p=display&f=Colossal&t=MonSt*r
