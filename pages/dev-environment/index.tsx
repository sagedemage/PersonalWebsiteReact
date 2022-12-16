import Head from 'next/head'
import styles from 'styles/DevEnvironment.module.css'

import debian from 'assets/images/debian_logo.webp';
import gnome from 'assets/images/gnome_logo.webp';
import desktop from 'assets/images/gnome_desktop_screenshot.webp';
import neovim from 'assets/images/neovim_logo.webp';

export default function DevEnvironment() {
  return (
    <div>
      <Head>
        <title>My Dev Environment</title>
        <meta name="description" content="salmaan saeed's dev environment" />
      </Head>

      <main>
        <h1> My Development Environment </h1>
			<p>
				I usually do my development on Linux. Certain times, I will have to
				use Windows to do development. To be honest, your dev environment
				does not matter if you want to be good developer. I am happy with my 
				dev environment since it makes me productive when I want to do 
				development.
			</p>
			<h2> The Linux Distro I Use </h2>
			<div className="caption">
				<figure>
					<img id={styles.debian_logo} src={debian.src} alt="Debain Logo" />
                    <figcaption>Image credit: <a href="https://www.debian.org/">Debian Project</a></figcaption>
				</figure>
				<div className="caption-info">
					<p> 
						Debian is the Linux distro I use on my system. Debian's stable environment helps me
						to get work done.
					</p> 
				</div>
			</div>

			<h2> The Desktop Environment I Use </h2>
			<div className="caption">
				<p>
					<img className={styles.logo} src={gnome.src} alt="Gnome Logo" />
					Image credit: <a href="https://www.gnome.org/">Gnome Foundation</a>
				</p>
				<div className="caption-info">
					<p> 
						Gnome is the desktop environment I use. Gnome has a nice and simple user interface. 
						It helps me to become productive when I need to do work. In my opinion,
						Gnome is a great desktop environment for general computer usage.
					</p>
				</div>
			</div>
				
			<h3> My Desktop </h3>
			<p>
				<img className="scale_image" src={desktop.src} alt="My Desktop" />
			</p>

			<h2> The Text Editor I Use </h2>
			<div className="caption">
				<p>
					<img className={styles.logo} /*className="scale_image"*/ src={neovim.src} alt="Neovim Logo" />
					Image credit: <a href="https://neovim.io/">Neovim</a>
				</p>
				<div className="caption-info">
					<p> 
						Neovim is the text editor I use. Neovim does have a tough learning curve. Once I got through the 
						learning curve of Neovim, I am satisfied with the work I can get done with it. I decided to use
						Neovim instead of Vim since it is the improved version of Vim. I see Neovim as the modern successor 
						to Vim.
					</p>
					<p> 
						I have extended Neovim to have all the features I wanted as a developer.
						My Neovim configuration is located 
						on <a href="https://github.com/sagedemage/neovim-config">neovim-config</a>.
					</p>
				</div>
			</div>
      </main>
    </div>
  )
}

