# Workflows
## Integration

Run linter step over every push

Commands executed are:
```
npm ci
npm run lint
```
if in your local fails then will fail CI step

## Deployment

Run deploy on S3 bucket only when master branch is changed

* TODO: lets check permission for user that push code to s3 bucket
** Should allow to write to specific bucket
** Should allow to delete to specific bucket
