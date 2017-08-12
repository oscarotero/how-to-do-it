# how-to-do-it
cli utility to help to remember other cli commands

## Install:

```sh
npm install how-to-do-it --global
```

## Example:

```sh
$ how-to remove remote branch
2 results:

→ Remove a remote branch:
  git push <remote> --delete <branch>

→ Remove all local branches removed in remote:
  git fetch <remote> --prune
```

Use `-i` argument, to view additional info in some results:

```sh
$ how-to remove remote branch
2 results:

→ Remove a remote branch:
  git push <remote> --delete <branch>
  Example: `git push origin --delete feat-awesome`

→ Remove all local branches removed in remote:
  git fetch <remote> --prune
  This removes all local branches not existing in the remote repository
```
